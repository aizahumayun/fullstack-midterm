import { useEffect, useState } from "react";
import api from "../services/api";
import type { QuoteType } from "../types/types";
import QuotesTable from "./QuotesTable";
import AddQuoteForm from "./AddQuoteForm";
const QuoteComponent = () => {
  const [quotes, setQuotes] = useState<QuoteType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchQuotes = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await api.get<QuoteType[]>("/");
      setQuotes(res.data);
    } catch (err) {
      setError((err as Error)?.message || "Failed to load");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchQuotes();
  }, []);

  const handleAddNew = async (newQuote: Omit<QuoteType, "_id">) => {
    try {
      const res = await api.post<QuoteType>("/", newQuote);
      setQuotes([...quotes, res.data]);
    } catch (error) {
      setError((error as Error)?.message || "Failed to add Quote");
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await api.delete(`/${id}`);
      setQuotes((prev) => prev.filter((quotes) => quotes._id !== id));
    } catch (error) {
      setError((error as Error)?.message || "Failed to delete Quote");
    }
  };

  return (
    <div className="p-3  bg-gray-50 rounded-lg min-h-screen">

      {error && (
        <div className="bg-red-100 text-red-700 p-4 rounded mb-4">
          <p className="font-semibold">Error:</p>
          <p>{error}</p>
          <button
            className="text-sm underline mt-2"
            onClick={() => setError(null)}
          >
            Dismiss
          </button>
        </div>
      )}

      <div className="mb-8">
        <QuotesTable
          quotes={quotes}
          loading={loading}
          error={error}
          deleteQuote={handleDelete}
        />
      </div>
      <div className="bg-white p-6 rounded shadow-md sticky top-8">
          <h2 className="text-2xl font-semibold mb-1 text-gray-700">
            Add New Quote
          </h2>
          <AddQuoteForm onAddNew={handleAddNew} />
        </div>

      <div className="mt-8 mb-3 text-center">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          onClick={fetchQuotes}
        >
          {loading ? "Refreshing..." : "Refresh Data"}
        </button>
      </div>
    </div>
  );
};

export default QuoteComponent;
