import img from "../assets/lavoura.jpg"

export const IllustrationPanel = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-xl font-bold mb-5 pt-10 md:pt-0">Irrigue com inteligência</h2>
      <div className="h-full flex items-center justify-center">
        <img src={img} alt="Farming" className="max-h-96 object-contain" />
      </div>
    </div>
  );
};