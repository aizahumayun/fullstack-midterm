import type { QuoteType } from '../types/types'
interface QuotesTableProps {
    quotes: QuoteType[]
    loading: boolean
    error: string | null
    deleteQuote: (id: string) => void
}
const QuotesTable = ({ quotes, loading, error, deleteQuote }: QuotesTableProps) => {
  return (
   <div className='bg-white p-5'> <h1 className="font-bold text-gray-700 p-4 text-2xl"> Quotes Table </h1>
    {loading && <p className="text-gray-600">Refreshing...</p>}
      {error && (
        <div className="bg-red-100 text-red-700 p-2 rounded mb-2">
          <p>{error}</p>
        </div>
      )}
      <table className="w-full border-collapse border">
        <thead className="bg-gray-100">
          <tr className="text-gray-700">
            <th className="border p-2">Quote ID</th>
            <th className="border p-2">Quote</th>
            <th className="border p-2">Author</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody className='text-gray-700'>
            {quotes.map((quote) => (
                <tr key={quote._id}>
                    <td className="border p-2">{quote.quoteId}</td>
                    <td className="border p-2">{quote.quote}</td>
                    <td className="border p-2">{quote.author}</td>

                    <td className="border p-2"><button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => deleteQuote(quote._id)}>Delete</button></td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default QuotesTable
