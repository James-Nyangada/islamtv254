"use client"
import blog_data from "@/data/BlogData";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import BlogSidebar from "../common-blog/BlogSidebar";
import { client, urlFor } from "@/app/lib/sanity";
import { simpleBlogInfo } from "@/app/lib/interface";

// Helper function to fetch data
async function getData() {
  const query = `
   *[_type == 'blog'] | order(_createdAt desc){
  title,
    smallDescription,
    "currentSlug": slug.current,
    publishedAt,
    mainImage
  }`;

  const data = await client.fetch(query);
  return data;
}

export default function BlogArea() {
  const [data, setData] = useState<simpleBlogInfo[]>([]);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 3;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  // Fetch data when the component mounts
  useEffect(() => {
    async function fetchData() {
      const blogData = await getData();
      setData(blogData);
    }
    fetchData();
  }, []);

  // click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="blog-area pd-top-120 pd-bottom-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            {currentItems.map((post, idx) => (
              <div key={idx} className="single-blog-inner style-border">
                <div className="thumb">
                  <Image src={urlFor(post.mainImage).url()} alt={post.title} width={700} height={700} />
                </div>
                <div className="details">
                  <ul className="blog-meta">
                    <li><i className="fa fa-user"></i> BY ADMIN</li>
                    <li><i className="fa fa-calendar-check-o"></i> Jan</li>
                  </ul>
                  <h3 className="title"><Link href={`/blog/${post.currentSlug}`}>{post.title}</Link></h3>
                  <p>{post.smallDescription}</p>
                  <Link className="read-more-text" href={`/blog/${post.currentSlug}`}>READ MORE <i className="fa fa-angle-right"></i></Link>
                </div>
              </div>
            ))}

            <nav className="td-page-navigation">
              <ReactPaginate
                breakLabel="..."
                nextLabel={<i className="fa fa-angle-double-right"></i>}
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel={<i className="fa fa-angle-double-left"></i>}
                renderOnZeroPageCount={null}
                className="pagination"
              />
            </nav>
          </div>

          <div className="col-lg-4">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
