"use client";

import { useEffect, useState } from "react";
import { Button } from "~/components/shadcn/button";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "~/components/shadcn/carousel";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "~/components/shadcn/tooltip";

export default function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [draggable, setDraggable] = useState(true);

  useEffect(() => {
    console.log(draggable)
  }, [draggable])
  
  useEffect(() => {
    if (!api) return;

    function update(api: Exclude<CarouselApi, undefined>) {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap());
      console.log("Hi");
    }
    update(api);

    api.on("select", (api) => {
      setCurrent(api.selectedScrollSnap());
    });
    api.on("resize", update);

    return () => {
      api.destroy();
    };
  }, [api]);

  return (
    <div className="wrapper my-8 md:my-20">
      <Carousel opts={{ align: "start", watchDrag: draggable }} setApi={setApi}>
        <CarouselContent className="-ml-6 md:-ml-12">
          {testimonials.map((testimonial) => (
            <CarouselItem
              key={testimonial.id}
              className={`pl-6 md:pl-12 flex flex-col gap-4 basis-full md:basis-1/2 not-md:text-center not-md:items-center ${draggable ? "select-none" : ""}`}
            >
              <span className="font-bold text-6xl md:text-7xl text-primary -mb-4">“</span>
              <p className="font-bold text-lg sm:text-xl lg:text-2xl max-w-lg">{testimonial.content}</p>
              <p>
                <span className="font-bold lg:text-lg">{testimonial.name}</span>
                <span className="decoration-only"> - </span>
                <span className="text-foreground/70 not-lg:text-sm">{testimonial.type}</span>
              </p>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <Controls api={api} count={count} current={current} draggable={draggable} setDraggable={setDraggable} />
    </div>
  );
}

type ControlsProps = {
  api: CarouselApi;
  count: number;
  current: number;
  draggable: boolean;
  setDraggable: React.Dispatch<React.SetStateAction<boolean>>;
};

function Controls({ api, count, current, draggable, setDraggable }: ControlsProps) {
  function toggleDraggable() {
    setDraggable((prev) => !prev);
  }

  return (
    <div className="not-md:mx-auto flex items-center gap-6 md:gap-8 mt-8 md:mt-12 flex-wrap not-md:justify-center">
      <div className="flex gap-4">
        {Array.from({ length: count }).map((_, ind) => (
          <button
            className={`w-6 h-6 rounded-full inline-block duration-200 cursor-pointer ${ind === current ? "bg-primary pointer-events-none" : "bg-muted"}`}
            onClick={() => api?.scrollTo(ind)}
          />
        ))}
      </div>
      <div>
        <TooltipProvider>
          <Tooltip delayDuration={200}>
            <TooltipTrigger asChild>
              <Button onClick={toggleDraggable} className={`grid grid-single ${draggable ? "" : "bg-muted hover:bg-muted/80"}`}>
                <span className={draggable ? "invisible" : ""}>Enable drag scroll</span>
                <span className={draggable ? "" : "invisible"}>Disable drag scroll</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent className="text-sm">Disable drag scroll to enable text selection.</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}

type Testimonial = {
  id: string;
  name: string;
  type: string;
  content: string;
};

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Diego Morata",
    type: "Web Developer",
    content:
      "OMG! I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish.",
  },
  {
    id: "2",
    name: "Franklin Hicks",
    type: "Digital Marketer",
    content:
      "Simply the best. Better than all the rest. I'd recommend this product to beginners and advanced users.",
  },
  {
    id: "3",
    name: "Samantha Lee",
    type: "UI/UX Designer",
    content: "The design blocks are so versatile and easy to customize. My workflow has never been smoother!",
  },
  {
    id: "4",
    name: "Rajesh Patel",
    type: "Startup Founder",
    content: "It helped us launch our MVP in record time. The support team was also incredibly responsive.",
  },
];
