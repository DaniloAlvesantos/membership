import { reviewsData } from '@/app/constants/content';
import { AvatarPrimary } from '@membership/ui';
import { Star } from 'lucide-react';

export const ReviewsView = () => {
  return (
    <section
      id="reviews"
      className="bg-[#121212] text-zinc-100 py-24 px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-center text-xl sm:text-2xl md:text-3xl mb-12">
        Built by Club Owners, for Club Owners
      </h2>

      <main className="grid md:grid-cols-2 lg:grid-cols-3 gap-[1.5rem]">
        {reviewsData.map((review) => (
          <div
            key={review.name}
            className="flex flex-col bg-[#1A1A1A] rounded-3xl border border-white/10 p-8"
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: review.rate }, (_, index) => (
                <Star
                  key={index}
                  className="size-4.5 text-app-green-300 fill-app-green-300"
                />
              ))}
            </div>
            <p className="text-body-lg font-body-lg italic mb-7 leading-relaxed">
              &quot;{review.description}&quot;
            </p>
            <hr className="mb-4" />
            <div className="flex gap-2 items-center">
              <AvatarPrimary url={review.profilePic} name={review.name} />
              <span>{review.name}</span>
            </div>
          </div>
        ))}
      </main>
    </section>
  );
};
