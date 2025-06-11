import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "@/components/Loader/Loader";
import ErrorBoundary from "@/components/ErrorBoundary/ErrorBoundary";
import ServicesLayout from "@/layouts/ServicesLayout";

//lazy-loaded components
const MainLayout = lazy(() => import("@/layouts/MainLayout"));
const HomePage = lazy(() => import("@/pages/home/HomePage"));
const AboutPage = lazy(() => import("@/pages/about/AboutPage"));
const ServicesPage = lazy(() => import("@/pages/services/ServicesPage"));
const ServicePage = lazy(() => import("@/pages/services/ServicePage"));
const ContactPage = lazy(() => import("@/pages/contact/ContactPage"));
const NotFound = lazy(() => import("@/pages/notfound/NotFound"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <Suspense fallback={<Loader />}>
          <MainLayout />
        </Suspense>
      }
    >
      <Route
        index
        element={
          <Suspense fallback={<Loader />}>
            <HomePage />
          </Suspense>
        }
      />
      <Route
        path="about"
        element={
          <Suspense fallback={<Loader />}>
            <AboutPage />
          </Suspense>
        }
      />

      <Route
        path="services"
        element={
          <Suspense fallback={<Loader />}>
            <ServicesLayout />
          </Suspense>
        }
      >
        <Route
          index
          element={
            <Suspense fallback={<Loader />}>
              <ServicesPage />
            </Suspense>
          }
        />

        <Route
          path=":id"
          element={
            <Suspense fallback={<Loader />}>
              <ServicePage />
            </Suspense>
          }
        />
      </Route>
      <Route
        path="contact-us"
        element={
          <Suspense fallback={<Loader />}>
            <ContactPage />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense fallback={<Loader />}>
            <NotFound />
          </Suspense>
        }
      />
    </Route>
  )
);

const AppRouter = () => (
  <ErrorBoundary>
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  </ErrorBoundary>
);

export default AppRouter;
