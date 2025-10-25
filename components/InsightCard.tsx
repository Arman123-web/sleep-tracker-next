type Props = {
  title: string;
  value: string | number;
  description?: string;
};

export default function InsightCard({ title, value, description }: Props) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center">
      <h3 className="text-gray-600 text-sm">{title}</h3>
      <p className="text-2xl font-bold text-purple-600">{value}</p>
      {description && <p className="text-gray-500 text-sm">{description}</p>}
    </div>
  );
}
