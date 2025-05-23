import React from "react";

const FAQSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center text-green-800 mb-10">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="faq-accordion" defaultChecked />
          <div className="collapse-title font-semibold">
            How do I add a new plant to my collection?
          </div>
          <div className="collapse-content text-sm">
            Click on the "Add Plant" button in your dashboard, then fill out the
            plant details and save.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold">
            How can I set watering reminders for my plants?
          </div>
          <div className="collapse-content text-sm">
            When adding or updating a plant, set the watering frequency and last
            watered date. Our system will calculate and notify you of the next
            watering date.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold">
            Can I track the health status of my plants here?
          </div>
          <div className="collapse-content text-sm">
            Yes! You can update the health status for each plant to keep track
            of its wellbeing and get care tips accordingly.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold">
            What if I want to edit or delete a plant from my list?
          </div>
          <div className="collapse-content text-sm">
            You can update or delete any plant by navigating to its detail page
            and using the Edit or Delete options provided.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold">
            Is my plant data private and secure?
          </div>
          <div className="collapse-content text-sm">
            Absolutely! All your plant data is stored securely and accessible
            only by you when logged in.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
