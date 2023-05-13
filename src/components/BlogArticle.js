// import React, { useState, useEffect } from "react";
// import "./CSS/BlogArticle.css";

// const BlogArticle = ({ title, subtitle, content, imageUrl }) => {
//   const [showModal, setShowModal] = useState(false);
//   const [scrollPosition, setScrollPosition] = useState(0);

//   useEffect(() => {
//     // Save the current scroll position when the modal is shown
//     if (showModal) {
//       setScrollPosition(window.pageYOffset);
//     }
//   }, [showModal]);

//   const handleClose = () => {
//     const confirmed = window.confirm('Are you sure you want to close the form?');
//     if (confirmed) {
//       setShowModal(false);
//       // Restore the previous scroll position when the modal is closed
//       window.scrollTo(0, scrollPosition);
//     }
//   };

//   const handleModalClick = (e) => {
//     if (e.target.closest('.blog-card-content')) {
//       setShowModal(true);
//     }
//   };

//   return (
//     <div className="blog-article">
//       <div className="blog-article-header">
//         <h1>{title}</h1>
//         <p>{subtitle}</p>
//       </div>
//       <div className="blog-article-content">
//         <img src={imageUrl} alt="Blog article image" />
//         <p>{content}</p>
//       </div>
//       <div className="blog-article-footer">
//         <button onClick={handleModalClick}>Learn More</button>
//       </div>
//     </div>
//   );
// };

// export default BlogArticle;
