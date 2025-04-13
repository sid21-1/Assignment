"use client";
import { useState, useEffect } from "react";
import BlogList from "@/components/BlogList";
import PageHeader from "@/components/PageHeader";
import React from "react";

const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const LandingPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  return (
    <>
      <PageHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <BlogList searchTerm={debouncedSearchTerm} />
    </>
  );
};

export default LandingPage;
