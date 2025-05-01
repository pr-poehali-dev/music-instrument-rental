
import InstrumentCard, { InstrumentCardProps } from "./InstrumentCard";

interface InstrumentGridProps {
  instruments: InstrumentCardProps[];
}

const InstrumentGrid = ({ instruments }: InstrumentGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {instruments.map((instrument) => (
        <InstrumentCard key={instrument.id} {...instrument} />
      ))}
    </div>
  );
};

export default InstrumentGrid;
