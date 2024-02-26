import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const RatingComponent = ({ label }) => {
  const [rating, setRating] = useState(0);

  return (
    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <div className="flex">
        {[1, 2, 3, 4, 5].map((number) => (
          <div
            key={number}
            className={`h-8 w-8 flex items-center justify-center rounded-full mx-1 cursor-pointer 
                                  ${
                                    number === rating
                                      ? "bg-orange-500"
                                      : "bg-gray-300"
                                  } text-white`}
            onClick={() => setRating(number)}
          >
            {number}
          </div>
        ))}
      </div>
    </div>
  );
};

export default function RatingFormDialog({ submitRating }) {
  const [showRatingForm, setShowRatingForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    rateContact: 0,
    usedInfo: "",
    usefulness: 0,
    technicality: 0,
    keywords: [],
    additionalFeedback: "",
  });

  const handleRatingFormOpen = () => {
    setShowRatingForm(true);
  };

  const handleRatingFormClose = () => {
    setShowRatingForm(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleKeywordChange = (keyword) => {
    setFormData((prev) => ({
      ...prev,
      keywords: prev.keywords.includes(keyword)
        ? prev.keywords.filter((kw) => kw !== keyword)
        : [...prev.keywords, keyword],
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    submitRating(formData);
    handleRatingFormClose();
  };

  const [rating, setRating] = useState(0);

  return (
    <>
      <Dialog open={showRatingForm} onOpenChange={setShowRatingForm}>
        {/* Dialog Trigger */}
        <DialogTrigger asChild>
          <Button onClick={handleRatingFormOpen}>Rate Expert</Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Rate the Interviewee</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleFormSubmit}>
            <div className="grid gap-4 py-4">
              <Label htmlFor="name">Name of interviewee:</Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
              />

              <Label htmlFor="date">Date interviewed:</Label>
              <Input
                id="date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleInputChange}
              />

              {/* Add other form fields for ratings, yes/no questions, and keywords here */}
              {/* For example: */}
              <RatingComponent label="How easy was the interviewee to contact?" />
              <RatingComponent label="How useful was the info the interviewee provided?" />
              <RatingComponent label="How technical was the info the interviewee provided?" />

              <Label>Any additional feedback?</Label>
              <textarea
                name="additionalFeedback"
                onChange={handleInputChange}
                value={formData.additionalFeedback}
                className="border p-2 rounded w-full"
              />
            </div>
            <DialogFooter>
              <Button
                type="button"
                onClick={handleRatingFormClose}
                variant="outline"
              >
                Cancel
              </Button>
              <Button type="submit">Submit</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
