import React, { useState, useEffect } from 'react';
import DashboardHeader from '../../components/DashboardHeader';
import { calculateRange } from '../../utils/table-pagination';
import { Link } from "react-router-dom"
import './admin.css';

export const Admin = () => {
    const [search] = useState('');
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState([]);
    const PublicFlo = "http://localhost:5000/images/"

    useEffect(() => {
        fetchPosts();
    }, []);

    useEffect(() => {
        setPagination(calculateRange(posts, 5));
    }, [posts, search]);

    const fetchPosts = async () => {
        try {
            const response = await fetch('/admin');
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    const handleChangePage = (newPage) => {
        setPage(newPage);
    };

    const handleDelete = async (postId) => {
        try {
            const response = await fetch(`/admin/${postId}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                setPosts(posts.filter(post => post._id !== postId));
            } else {
                console.error('Error deleting post:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    return (
        <div className='dashboard-content'>
          <Link to='/admin_add'>
            <DashboardHeader btnText='New Post' />
          </Link>
            <div className='dashboard-content-container'>
                <div className='dashboard-content-header'>
                    <h2>Posts List</h2>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Hình ảnh</th>
                            <th>Tiêu đề</th>
                            <th>Tác giả</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post, index) => (
                            <tr key={index}>
                                <td><img src={PublicFlo + post.photo} alt='' className="post-imageee" /></td>
                                <td>{post.title}</td>
                                <td>{post.username}</td>
                                <td>
                                    <button className='delete-button' onClick={() => handleDelete(post._id)}>Xóa</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {/* Pagination */}
                <div className='dashboard-content-footer'>
                    {pagination.map((item, index) => (
                        <span
                            key={index}
                            className={item === page ? 'active-pagination' : 'pagination'}
                            onClick={() => handleChangePage(item)}
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
