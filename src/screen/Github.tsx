

export default  function Error404 () {
  return (

    <div
    className="w-full min-h-screen h-full bg-gradient-to-b from-white via-purple-100 to-pink-100 
dark:bg-gradient-to-b dark:from-[#0F172A] dark:via-[#0f212a] dark:to-[#121a38]
m-0 p-10
dark:bg-[#0F172A] "
  >
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-4xl text-primary-600 dark:text-primary-500">
            🥱 sorry! we are still working on it.
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
              Something's missing.
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              Sorry, we can't find that page. You'll find lots to explore on the
              home page.{" "}
            </p>
            <a
             
              className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
            >
              Back to Homepage
            </a>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
}
