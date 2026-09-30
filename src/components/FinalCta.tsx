import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function FinalCta() {
  return (
    <section
      id="ready-to-explore"
      className="relative overflow-hidden py-16 bg-white">
      <div className="relative mx-auto grid max-w-6xl bg-[#f2efe7] items-center gap-12 px-4 sm:px-8 py-8 rounded-2xl lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-10 lg:px-12">
        <div className="text-center lg:text-left">
          <h2 className="font-serif text-4xl font-bold max-w-92.5 w-full">
            Ready to Explore Commodity{" "}
            <span className="gold-text">Markets</span>?
          </h2>

          <p className="mx-auto mt-5 max-w-xl font-medium ">
            Access global commodity markets through advanced technology,
            educational resources, and a professional trading environment
            designed for informed market participation.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <Button className="h-12 rounded-2xl px-6">
              Open Live Account
              <ArrowRight className="size-4" aria-hidden />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 rounded-2xl px-6">
              Try Demo Account
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <Image
            src="/ready-to-explore.png"
            alt="Gold growth chart, coins and percentage symbol representing commodity market opportunity"
            width={2566}
            height={1664}
            className="relative z-10 mx-auto h-auto w-full "
            sizes="(max-width: 1024px) 80vw, 40vw"
          />
        </div>
      </div>
    </section>
  );
}
