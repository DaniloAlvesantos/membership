const featuresData = [
  {
    title: 'Connect Your Store',
    description:
      'Import your existing products and member lists with a single click. We integrate with all major e-commerce platforms.',
  },
  {
    title: 'Design Your Tiers',
    description:
      'Configure flexible subscription models, from monthly boxes to digital-only access levels with tiered pricing.',
  },
  {
    title: 'Go Live & Scale',
    description:
      'Launch your portal and watch your community grow. Use our automated tools to keep members happy and retained.',
  },
];

export const FeaturesView = () => {
  return (
    <section id="features" className="py-24 px-4 md:px-8 lg:px-16">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
        How SubClub Empowers Your Brand
      </h2>
      <div className="flex flex-col lg:flex-row gap-16 items-center mt-8">
        <div className="space-y-4 md:space-y-8">
          {featuresData.map((feature, index) => (
            <div className="flex gap-4" key={String(index).padStart(2, '0')}>
              <div className="flex-shrink-0 border-4 border-app-green-500 rounded-full size-12 flex items-center justify-center text-bold text-app-green-500 font-bold">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="">
                <h4 className="font-bold text-xl md:text-2xl">
                  {feature.title}
                </h4>
                <p className="text-sm md:text-base">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="lg:w-1/2 bg-app-green-300/40 rounded-[2rem] p-8 relative">
          <img
            className="w-full h-auto rounded-xl shadow-lg"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAG_sKka47ftNCkMHsce6IdkJQHEDpoghZ1W0iTwhEeWotjXeq3vZ-q97JwJDzP2axEg5ls3sJbtsqQQMIGn6QbKBz9PhtL9fBgLlomKMQ3-MiXWorCFp9xtQ1RT0s2NA7t1ASjF9IzXdO8sw-8YOao71ol8jDlKPq3Mch2aucJX_pqlxmwwEMT4AasloRu4F8FKBuaS_ntl0iVJ3jaT_jHEan20Qf4UqRqwR2mjkRbZACfUssqsexBrYlESsLjgImQbpwkRkSo1ws"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
