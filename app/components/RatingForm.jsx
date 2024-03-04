import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import RatingComponent from "./RatingComponent";
import { checkIfLoggedIn, signUpWithGoogle } from "../firebase";
import { Label } from "@/components/ui/label";
import { db } from "../firebase";
import {
  doc,
  updateDoc,
  arrayUnion,
  getDoc,
  collection,
  addDoc,
} from "firebase/firestore";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function RatingFormDialog({ expertId }) {
  const [showRatingForm, setShowRatingForm] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const [formData, setFormData] = useState({
    rateContact: 0,
    usefulness: 0,
    technicality: 0,
    additionalFeedback: "",
  });

  const handleSignIn = async () => {
    try {
      await signUpWithGoogle();
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  useEffect(() => {
    const loggedIn = checkIfLoggedIn();
    setIsLoggedIn(loggedIn);
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const fullFormData = {
      userId,
      ...formData,
      timestamp: new Date(),
    };

    try {
      // await addDoc(collection(db, "ratings"), fullFormData);
      const expertRef = doc(db, "experts", expertId);
      const expertSnap = await getDoc(expertRef);

      if (expertSnap.exists()) {
        const expertData = expertSnap.data();
        const allRatings = [...(expertData.ratings || []), fullFormData];

        const averages = allRatings.reduce(
          (acc, rating) => {
            acc.rateContact += rating.rateContact;
            acc.usefulness += rating.usefulness;
            acc.technicality += rating.technicality;
            return acc;
          },
          { rateContact: 0, usefulness: 0, technicality: 0 }
        );

        const numRatings = allRatings.length;
        averages.rateContact /= numRatings;
        averages.usefulness /= numRatings;
        averages.technicality /= numRatings;

        await updateDoc(expertRef, {
          ratings: arrayUnion(fullFormData),
          averageRateContact: averages.rateContact,
          averageUsefulness: averages.usefulness,
          averageTechnicality: averages.technicality,
        });
      }

      setShowRatingForm(false);
      window.location.reload();
    } catch (error) {
      console.error("Error updating expert's rating: ", error);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUserId = localStorage.getItem("uid");
      setUserId(storedUserId);
    }
  }, []);

  const handleRatingChange = (ratingCategory, value) => {
    setFormData((prev) => ({ ...prev, [ratingCategory]: value }));
  };

  const handleFeedbackChange = (e) => {
    setFormData((prev) => ({ ...prev, additionalFeedback: e.target.value }));
  };

  return (
    <Dialog open={showRatingForm} onOpenChange={setShowRatingForm}>
      <DialogTrigger asChild>
        <Button onClick={() => setShowRatingForm(true)}>Rate Expert</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Rate the Expert</DialogTitle>
        </DialogHeader>
        {isLoggedIn ? (
          <form onSubmit={handleFormSubmit}>
            <div className="grid gap-4 py-4">
              <RatingComponent
                label="How easy was the interviewee to contact?"
                rating={formData.rateContact}
                handleRatingChange={(value) =>
                  handleRatingChange("rateContact", value)
                }
              />
              <RatingComponent
                label="How useful was the info the interviewee provided?"
                rating={formData.usefulness}
                handleRatingChange={(value) =>
                  handleRatingChange("usefulness", value)
                }
              />
              <RatingComponent
                label="How technical was the info the interviewee provided?"
                rating={formData.technicality}
                handleRatingChange={(value) =>
                  handleRatingChange("technicality", value)
                }
              />
              <Label>Any additional feedback?</Label>
              <textarea
                name="additionalFeedback"
                onChange={handleFeedbackChange}
                value={formData.additionalFeedback}
                className="border p-2 rounded w-full"
              />
            </div>
            <DialogFooter>
              <Button
                type="button"
                onClick={() => setShowRatingForm(false)}
                variant="outline"
              >
                Cancel
              </Button>
              <Button type="submit">Submit</Button>
            </DialogFooter>
          </form>
        ) : (
          <p>Please sign in to submit a rating.</p>
        )}
      </DialogContent>
    </Dialog>
  );
}
