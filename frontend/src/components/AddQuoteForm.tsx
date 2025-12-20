import React from "react";
import type { QuoteType } from "../types/types";
import { useForm } from "react-hook-form";
interface AddQuoteFormProps {
  onAddNew: (newQuote: Omit<QuoteType, "_id">) => void;
}

const AddQuoteForm = ({ onAddNew }: AddQuoteFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<QuoteType>();

  const onSubmit = (data: QuoteType) => {
    onAddNew(data);
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-2 flex flex-col gap-4 text-left text-gray-700"
    >
      <div>
        <label className="font-semibold text-gray-700 mb-2">Quote ID</label>
        <input
          {...register("quoteId", { required: "id is required" })}
          type="number"
          placeholder="e.g 1"
          className="placeholder:text-gray-400 border-2 border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {errors.quoteId && (
          <span className="text-red-500">{errors.quoteId.message}</span>
        )}
      </div>
      <div>
        <label className="font-semibold text-gray-700 mb-2">Quote</label>
        <input
          {...register("quote", { required: "Quote is required" })}
          type="text"
          placeholder="Quote"
          className="placeholder:text-gray-400 border-2 border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {errors.quote && (
          <span className="text-red-500">{errors.quote.message}</span>
        )}
      </div>
      <div>
        <label className="font-semibold text-gray-700 mb-2">Author</label>
        <input
          {...register("author", { required: "Author is required" })}
          type="text"
          placeholder="Author"
          className="placeholder:text-gray-400 border-2 border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {errors.author && (
          <span className="text-red-500">{errors.author.message}</span>
        )}
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Add Quote
        </button>
      </div>
    </form>
  );
};

export default AddQuoteForm;
