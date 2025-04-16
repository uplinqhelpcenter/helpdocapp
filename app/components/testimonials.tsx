export function Testimonials() {
  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              What Customers Say
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              See why businesses trust Uplinq with their financial management
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="custom-card">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="card-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Sarah Thompson</h3>
                  <p className="text-sm text-muted-foreground">
                    Small Business Owner
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground">
                &quot;Uplinq&apos;s bookkeeping services have been a game-changer for my business. The AI automatically categorizes transactions with impressive accuracy, and their team is responsive and knowledgeable.&quot;
              </p>
            </div>
          </div>
          <div className="custom-card">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="card-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Michael Rodriguez</h3>
                  <p className="text-sm text-muted-foreground">
                    E-Commerce Founder
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground">
                &quot;With Uplinq&apos;s tax filing solution, I saved thousands this year through deductions I would have missed. Their AI identifies optimization opportunities I never knew existed.&quot;
              </p>
            </div>
          </div>
          <div className="custom-card">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="card-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Jennifer Chen</h3>
                  <p className="text-sm text-muted-foreground">
                    Professional Services
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground">
                &quot;The Uplinq platform makes financial management effortless. I can see my business health at a glance, and their AI provides actionable insights that have helped me improve cashflow by 30%.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}