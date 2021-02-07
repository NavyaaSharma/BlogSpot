import Layout from '../components/Layout';
import Link from 'next/link';

const Index = () => {
    return (
        <div className="content2">
        <Layout>
            <article className="overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1 className="display-4 font-weight-bold">
                                One Stop Blogging Platform For VITians.
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center pt-4 pb-5">
                            <p className="lead">
                            A collection of handpicked blogs from experienced students to help and guide you throughout your university life.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row card mb-3 ml-5 mr-5">
                        <div className="p-3">
                            <h2 className="card-title text-center">Worried About Placements And Internship Oppurtunities?</h2>
                            <p className="card-text fsize text-center">We bring to you the Interview Experiences from your fellow batchmates in VIT.
                            Get informed about the process of hiring, HOT questions the companies focus on and get inspired by the success stories of people who got On-campus/Off-campus Internships and Placements</p>
                        </div>
                        <div className="col-md-12 text-center pb-3">
                            <img src="../static/images/interview.jpg" width="60%" height="250px" alt="frwe"/>
                        </div>
                    </div>
                    <div className="row card mb-3 ml-5 mr-5">
                        <div className="p-3">
                            <h2 className="card-title text-center">Want to start/excel Competitive Coding?</h2>
                            <p className="card-text fsize text-center">We recommend practicing problems from Leetcode and/or Geeks For Geeks, and make sure you solve the daily challenge of leetcode that comes every month.
                            If you feel stuck or need guidance for all the leetcode challenge problems, we help you by providing various approaches for the same problem.
                            </p>
                        </div>
                        <div className="col-md-12 text-center pb-3">
                            <img src="../static/images/leetcode.png" width="60%" height="250px" alt="frwe"/>
                        </div>
                    </div>
                    <div className="row card mb-3 ml-5 mr-5">
                        <div className="p-3">
                            <h2 className="card-title text-center">Want to become an AllRounder in VIT? - COMING SOON</h2>
                            <p className="card-text fsize text-center">Do you feel pressurized by the load that VIT puts on you through academics? Are you unable to 
                            give time to other things like learning and exploring new stuff and at the same time remain a 9 pointer also?
                            We provide blogs that will help you cope up will all this and become an allrounder in VIT.
                            </p>
                        </div>
                        <div className="col-md-12 text-center pb-3">
                            <img src="../static/images/allrounder.jpeg" width="60%" height="250px" alt="frwe"/>
                        </div>
                    </div>
                    <div className="row card mb-3 ml-5 mr-5">
                        <div className="p-3">
                            <h2 className="card-title text-center">Technical Blogs - COMING SOON</h2>
                            <p className="card-text text-center fsize">Want to get guidance to learning and expoloring different technical domains, Our blog content will surely help you here!
                            </p>
                        </div>
                        <div className="col-md-12 text-center pb-3">
                            <img src="../static/images/techblogs.jpg" width="60%" height="250px" alt="frwe"/>
                        </div>
                    </div>
                </div>
            </article>

        </Layout>
        </div>
    );
};

export default Index;