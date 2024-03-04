import React from 'react';
import ExpertCard from './ExpertCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function SuggestionComponent({ experts }) {
    return (
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Suggestions</h2>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {experts.map((expert) => (
              <CarouselItem key={expert.id} className="basis-1/3 flex">
                <div className="p-1 w-full flex items-stretch">
                  <ExpertCard
                    id={expert.id}
                    name={expert.name}
                    title={expert.title}
                    school={expert.school}
                    fields={expert.fields}
                    focus_areas={expert.focus_areas}
                    image_src={expert.image_src}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    )
  }
