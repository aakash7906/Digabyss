import { createBrowserRouter, Navigate } from "react-router-dom"
import { WebsiteLayout } from "@/layouts/WebsiteLayout"
import { AuthLayout } from "@/layouts/AuthLayout"
import { DashboardLayout } from "@/layouts/DashboardLayout"

// Website Pages 
import HomePage from "@/Pages/Website/HomePage/HomePage"
import ShopPage from "@/Pages/Website/ShopPage/ShopPage"
import AboutPage from "@/Pages/Website/AboutPage/AboutPage"
import ContactPage from "@/Pages/Website/ContactPage/ContactPage"
import CareerPage from "@/Pages/Website/CareerPage/CareerPage"
import MyAccountPage from "@/Pages/Website/MyAccountPage/MyAccountPage"
import OrderInformationPage from "@/Pages/Website/OrderInformationPage/OrderInformationPage.tsx"
import PrivacyPolicyPage from "@/Pages/Website/PrivacyPolicyPage/PrivacyPolicyPage.tsx"
import TermsConditionsPage from "@/Pages/Website/TermsConditionsPage/TermsConditionsPage.tsx"
import ProductCategoryPage from "@/Pages/Website/ProductCategoryPage/ProductCategoryPage"
import ViewCart from "@/Pages/Website/ViewCartPage/ViewCart"
import LoginSignup from "@/Pages/Website/LoginSignup/LoginSignup.tsx"
import ScheduleStreamingPage from "@/Pages/Website/ScheduleStreamingPage/ScheduleStreamingPage"

// Authentication Pages
import { LoginPage } from "@/Pages/Authentication/LoginPage"
import { SignupPage } from "@/Pages/Authentication/SignupPage"

// Dashboard Pages
import { DashboardPage } from "@/app/dashboard/DashboardPage"
import { AnalyticsPage } from "@/app/dashboard/AnalyticsPage"
import { SettingsPage } from "@/app/dashboard/SettingsPage"

export const router = createBrowserRouter([
  {
    element: <WebsiteLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/shop", element: <ShopPage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/careers", element: <CareerPage /> },
      { path: "/my-account", element: <MyAccountPage /> },
      { path: "/account", element: <MyAccountPage /> },
      { path: "/order-info", element: <OrderInformationPage /> },
      { path: "/order-information", element: <OrderInformationPage /> },
      { path: "/schedule-digital-streaming", element: <ScheduleStreamingPage /> },
      { path: "/schedule-streaming", element: <ScheduleStreamingPage /> },
      { path: "/privacy-policy", element: <PrivacyPolicyPage /> },
      { path: "/privacy", element: <PrivacyPolicyPage /> },
      { path: "/terms", element: <TermsConditionsPage /> },
      { path: "/product-category/:category", element: <ProductCategoryPage /> },
      { path: "/product-category/:category/:subcategory", element: <ProductCategoryPage /> },
      { path: "/viewcart", element: <ViewCart /> },
      { path: "/cart", element: <ViewCart /> },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      { path: "/login", element: <LoginPage /> },
      { path: "/signup", element: <SignupPage /> },
      { path: "/login-signup", element: <LoginSignup /> },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: "analytics", element: <AnalyticsPage /> },
      { path: "settings", element: <SettingsPage /> },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
])
