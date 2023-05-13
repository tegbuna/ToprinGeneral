// import React, { useState, useEffect } from "react";
// import "./CSS/Blog.css";
// import { Modal, Card, Button } from "react-bootstrap";
// import BlogArticle from "./BlogArticle";

// const maxLength = 200;
// const ellipsis = "...";

// const formatText = (text, maxLength, ellipsis) => {
//     if (text.length > maxLength) {
//         const lastSpaceIndex = text.lastIndexOf(" ", maxLength - ellipsis.length);
//         if (lastSpaceIndex !== -1) {
//             text = text.substring(0, lastSpaceIndex) + ellipsis;
//         } else {
//             text = text.substring(0, maxLength - ellipsis.length) + ellipsis;
//         }
//     }
//     return text;
// };

// const Blog = ({ title, closeModal }) => {
//   const [showModal, setShowModal] = useState(false);
//   const [scrollPosition, setScrollPosition] = useState(0);

//   useEffect(() => {
//     // Save the current scroll position when the modal is shown
//     if (showModal) {
//       setScrollPosition(window.pageYOffset);
//     }
//   }, [showModal]);

//   const handleClose = () => {
//     setShowModal(false);
//     // Restore the previous scroll position when the modal is closed
//     window.scrollTo(0, scrollPosition);
//   };

//   const handleModalClick = (e) => {
//     if (e.target.closest('.blog-card-content')) {
//       setShowModal(true);
//     }
//   };

//   const blogArticles = [
//     {
//       title: "Airbag Module Reset",
//       subtitle: "SRS light on after an accident?",
//       content:
//         "If the SRS light is on after an accident, it could be due to fault codes. Other possible issues could be related to wiring issues or loose connections in the airbag system or corrosion or damage to the airbag control module. Read on to learn more...",
//       imageUrl: "/path/to/image1.jpg",
//     },
//     {
//       title: "Car Programming",
//       subtitle: "Need to replace a control module or a key?",
//       content:
//         "A few of the most common issues we see with Toprin General's Car Programming service can program new or used control modules, keys, and remotes for your vehicle.",
//       imageUrl: "/path/to/image2.jpg",
//     },
//     {
//         title: "Tire Pressure Monitoring System (TPMS) Reset",
//         subtitle: "Low tire pressure light on?",
//         content:
//           "If the low tire pressure light is on, it could be due to a slow leak in one of your tires. Toprin General's TPMS Reset service can quickly and easily reset your TPMS light so you can get back on the road safely.",
//         imageUrl: "/path/to/image3.jpg",
//       },
//       {
//         title: "Engine Diagnostic Service",
//         subtitle: "Check Engine light on?",
//         content:
//           "If the check engine light is on, it could be due to a variety of issues. Toprin General's Engine Diagnostic Service can quickly and easily diagnose the issue and recommend the best course of action.",
//         imageUrl: "/path/to/image4.jpg",
//       },
//       {
//         "title": "Instrument Cluster Repair",
//         "subtitle": "Tachometer or speedometer not working?",
//         "content": "If your tachometer or speedometer is not working, Toprin General's Instrument Cluster Repair service can diagnose and fix issues with your gauges.",
//         "imageUrl": "/path/to/image2.jpg",
//         "id": "instrument-cluster-repair",
//       },
//       {
//         "title": "Key Fob Replacement",
//         "subtitle": "Lost or damaged your key fob?",
//         "content": "Some of the most common issues that cause our clients to replace their key fobs are faulty or damaged key fob or transponder, incorrect key programming sequence and malfunctioning keyless entry receiver or vehicle control module.",
//         "imageUrl": "/path/to/image3.jpg",
//         "id": "key-fob-replacement"
//       },
//       {
//         "title": "ABS Module Programming",
//         "subtitle": "ABS light on your dashboard?",
//         "content": "If the ABS light is on in your vehicle, it could be due to a faulty ABS module, and Toprin General's ABS Module Repair service can diagnose and repair any issues with your ABS module.",
//         "imageUrl": "/path/to/image4.jpg",
//         "id": "abs-module-programming",
//       },
//       {
//         "title": "Transmission Control Module Programming (TCM) Repair",
//         "subtitle": "Experiencing transmission problems?",
//         "content": "Our Transmission Control Module (TCM) programming service can help you with that. If you're experiencing issues with your transmission, such as slipping gears, rough shifting, or poor acceleration, it could be due to a malfunctioning TCM. Our experts can diagnose and repair any issues with your TCM, restoring the performance and drivability of your vehicle.",
//         "imageUrl": "/path/to/image5.jpg",
//         "id": "transmission-control-module-programming-tcm-repair",
//       },
//     ];

//     return (
//       <div className="blog">
//         <div className="blog-headings">
//           <h1 className="titles">Blogs</h1>
//         </div>

//         <div className="blog-container">
//           {blogArticles.map((article) => (
//             <div className="blog-card-content" key={article.id} onClick={handleModalClick}>
//               <h3 className="sub-bold">{article.title}</h3>
//               <p className="sub-bold">{article.subtitle}</p>
//               <div className="blog-card-body" id="blog-card1">
//                 <p className="details">
//                   {formatText(article.content, maxLength, ellipsis)}
//                 </p>
//               </div>
//               <div className="lm-button">
//                 <a href="/" alt="Go to request form button">Learn More</a>
//                 <Modal
//                   show={showModal}
//                   onHide={handleClose}
//                   backdrop="static"
//                   keyboard={true}
//                 >
//                   <div>
//                     <h4>{article.title}</h4>
//                     <p>{article.content}</p>
//                     <button
//                       type="button"
//                       className="close"
//                       data-dismiss="modal"
//                       aria-label="Close"
//                     >
//                       <span aria-hidden="true">&times;</span>
//                     </button>
//                   </div>
//                 </Modal>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };

// export default Blog
