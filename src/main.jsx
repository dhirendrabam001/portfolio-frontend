import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import App from "./App.jsx";

import "./styles.css";
import "./pagescss.css";
import ScrollTop from "./Data/ScrollTop.jsx";
import BlogPageRoutes from "./Router/BlogPageRoutes.jsx";
import OptimizeBlogRoutes from "./Router/OptimizeBlogRoutes.jsx";
import ImproveBlogRoutes from "./Router/ImproveBlogRoutes.jsx";
import DashBoardRoutes from "./Router/ProjectViewRoutes/DashBoardRoutes.jsx";
import ShopDetailsRoutes from "./Router/ProjectViewRoutes/ShopDetailsRoutes.jsx";
import EcommerceRoutes from "./Router/ProjectViewRoutes/EcommerceRoutes.jsx";
import JobPortalRoutes from "./Router/ProjectViewRoutes/JobPortalRoutes.jsx";
import AboutUsRoutes from "./Router/NavBarRoute/AboutUsRoutes.jsx";
import ServicesRoutes from "./Router/NavBarRoute/SevicesRoutes.jsx";
import PortfolioRoutes from "./Router/NavBarRoute/PortfolioRoutes.jsx";
import ResumeRoutes from "./Router/NavBarRoute/ResumeRoutes.jsx";
import BlogSectionRoutes from "./Router/NavBarRoute/BlogSectionRoutes.jsx";
import BlogFrameWorkRoutes from "./Router/BlogFrameWorkRoutes.jsx";
import BlogJavaScriptRoutes from "./Router/BlogJavaScriptRoutes.jsx";
import BlogReactRoutes from "./Router/BlogReactRoutes.jsx";
import ContactRoutes from "./Router/NavBarRoute/ContactRoutes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollTop />
      {/* GLOBAL TOAST */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
      />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about-us" element={<AboutUsRoutes />}></Route>
        <Route path="/services" element={<ServicesRoutes />}></Route>
        <Route path="/portfolio" element={<PortfolioRoutes />}></Route>
        <Route path="/resume" element={<ResumeRoutes />}></Route>
        <Route path="/blog" element={<BlogSectionRoutes />}></Route>
        <Route path="/contact" element={<ContactRoutes />}></Route>
        <Route path="/blog-pages" element={<BlogPageRoutes />} />
        <Route path="/blog-optimize" element={<OptimizeBlogRoutes />} />
        <Route path="/blog-improve" element={<ImproveBlogRoutes />} />
        <Route path="/blog-framework" element={<BlogFrameWorkRoutes />}></Route>
        <Route path="/blog-reacts" element={<BlogReactRoutes />}></Route>
        <Route
          path="/blog-javascript"
          element={<BlogJavaScriptRoutes />}
        ></Route>
        {/* Project Routes */}
        <Route path="/dashboard-details" element={<DashBoardRoutes />} />
        <Route path="/shop-details" element={<ShopDetailsRoutes />} />
        <Route path="ecommerce-details" element={<EcommerceRoutes />} />
        <Route path="/jobportal-details" element={<JobPortalRoutes />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
