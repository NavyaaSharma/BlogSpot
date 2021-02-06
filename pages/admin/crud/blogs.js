import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';
import BlogRead from '../../../components/crud/BlogRead';
import Link from 'next/link';
import '../../../static/css/style.css'

const Blog = () => {
    return (
        <div className="content1">
        <Layout>
            <Admin>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5">
                            <h2>Manage blogs</h2>
                        </div>
                        <div className="col-md-12">
                            <BlogRead />
                        </div>
                    </div>
                </div>
            </Admin>
        </Layout>
        </div>
    );
};

export default Blog;