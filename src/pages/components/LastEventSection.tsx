const LastEventSection = () => (
  <section>
    <div className="mx-auto max-w-lg lg:max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:h-[600px] lg:grid-cols-2">
        {/* TODO: Why did I add this z-10 */}
        <div className="relative z-10 lg:py-16">
          <div className="relative h-64 sm:h-80 lg:h-full">
            {/* TODO: Use `next/image` here */}
            <img
              alt="Last event of Galsen Dev"
              src="/img/hacktoberfest-2022.png"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="relative flex items-center bg-gray-100">
          <span className="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-100"></span>

          <div className="p-8 sm:p-16 lg:p-24">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Notre dernier event: <br />
              {/* TODO: Get the correct shade of blue for the accent color */}
              <span className="text-blue-500">HacktoberFest 2022</span>
            </h2>

            <p className="mt-4 text-gray-500">
              Galsen DEV en partenariat avec Xarala vous présente la deuxième
              édition du Hackaton Session & Open-source Day dans le cadre du
              Hacktoberfest 2022.
            </p>

            {/* TODO: Choose the right color here */}
            <div className="mt-8 flex items-center gap-2 text-gray-500">
              <svg viewBox="0 0 32 32" fill="currentColor" className="w-8 h-8">
                <path d="M16 2C13.0837 2.00344 10.2878 3.16347 8.22564 5.22563C6.16348 7.28778 5.00345 10.0837 5.00001 13C4.99652 15.3832 5.77499 17.7018 7.21601 19.6C7.21601 19.6 7.51601 19.995 7.56501 20.052L16 30L24.439 20.047C24.483 19.994 24.784 19.6 24.784 19.6L24.785 19.597C26.2253 17.6996 27.0034 15.3821 27 13C26.9966 10.0837 25.8365 7.28778 23.7744 5.22563C21.7122 3.16347 18.9163 2.00344 16 2ZM16 17C15.2089 17 14.4355 16.7654 13.7777 16.3259C13.1199 15.8864 12.6072 15.2616 12.3045 14.5307C12.0017 13.7998 11.9225 12.9956 12.0769 12.2196C12.2312 11.4437 12.6122 10.731 13.1716 10.1716C13.731 9.61216 14.4437 9.2312 15.2197 9.07686C15.9956 8.92252 16.7998 9.00173 17.5307 9.30448C18.2616 9.60723 18.8864 10.1199 19.3259 10.7777C19.7654 11.4355 20 12.2089 20 13C19.9987 14.0605 19.5768 15.0771 18.827 15.827C18.0771 16.5768 17.0605 16.9987 16 17Z" />
              </svg>
              <span className="text-blue-600">Campus Xarala, Liberté 6</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default LastEventSection;
