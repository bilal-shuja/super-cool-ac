import React from 'react'
import { Link } from 'react-router-dom'

const Blogs = () => {
  const blogs = [
    {id:1,
      image: "https://mdbootstrap.com/img/new/standard/nature/184.jpg",
      date: "28 Nov 2023",
      title: "Energy-efficient fridges – The solution to save money and the planet!",
      description: "Refrigerators can consume lots of energy at home, so optimizing their energy can impact electricity and energy efficiency bills...."
    },
    {id:2,
      image: "https://mdbootstrap.com/img/new/standard/nature/184.jpg",
      date: "28 Nov 2023",
      title: "Energy-efficient fridges – The solution to save money and the planet!",
      description: "Refrigerators can consume lots of energy at home, so optimizing their energy can impact electricity and energy efficiency bills...."
    },
    {id:3,
      image: "https://mdbootstrap.com/img/new/standard/nature/184.jpg",
      date: "28 Nov 2023",
      title: "Energy-efficient fridges – The solution to save money and the planet!",
      description: "Refrigerators can consume lots of energy at home, so optimizing their energy can impact electricity and energy efficiency bills...."
    },
    {id:4,
      image: "https://mdbootstrap.com/img/new/standard/nature/184.jpg",
      date: "28 Nov 2023",
      title: "Energy-efficient fridges – The solution to save money and the planet!",
      description: "Refrigerators can consume lots of energy at home, so optimizing their energy can impact electricity and energy efficiency bills...."
    },
  ]
  return (
    <section className='mt-5'>
      <div className='container'>
        <h1 className="mb-5">
          <strong>Blogs</strong></h1>
        <div className="row">
          {blogs.map((blog) => (
            <div className="col-lg-4 col-md-12 mb-4">
              <div className="card bg-white border border-2">
                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                  <img src={blog.image} className="img-fluid p-3" alt={blog.image} />
                  {/* <Link to="/blogs">
                                <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                            </Link> */}
                </div>
                <div className="card-body">
                  <p className='text-muted' style={{ textAlign: 'left', fontSize: "16px", fontWeight: "600" }}>{blog.date}</p>
                  <h5 className="card-title text-dark fw-bold" style={{ textAlign: 'left', fontSize: "17px" }}>{blog.title}</h5>
                  <p className="card-text " style={{ textAlign: 'left', marginTop: "1em" }}>
                    {blog.description}
                  </p>
                  <Link to={`/blogs/${blog.id}`}
                      state= {{ blogData: blogs}} // Pass blog data as state
                    
                   className="btn btn-outline-info font-monospace float-start">Read...</Link>
                </div>
              </div>
            </div>))}
        </div>
      </div>
    </section>
  )
}

export default Blogs