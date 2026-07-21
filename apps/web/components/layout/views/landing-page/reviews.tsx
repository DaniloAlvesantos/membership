import { AvatarPrimary } from '@membership/ui';
import { Star } from 'lucide-react';

const reviewsData = [
  {
    rate: 5,
    description:
      'Switching to SubClub reduced our churn rate by 15% in just three months. The automated billing recovery is a lifesaver.',
    name: 'Sarah Jenkins',
    profilePic:
      'https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
  },
  {
    rate: 5,
    description:
      'The fulfillment integration is seamless. We went from manual spreadsheets to a fully automated warehouse flow in weeks.',
    name: 'Mark Thompson',
    profilePic:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
  },
  {
    rate: 4,
    description:
      'Finally, a platform that understands subscription metrics. The insights dashboard helps me see exactly where we need to focus.',
    name: 'Elena Rodriguez',
    profilePic:
      'https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww',
  },
];

export const ReviewsView = () => {
  return (
    <section
      id="reviews"
      className="bg-[#121212] text-zinc-100 py-24 px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-center font-bold text-xl sm:text-2xl md:text-3xl mb-12">
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
