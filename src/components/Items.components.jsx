import Activity from "./Activity.components";

const activities = [
  { src: "🏃", name: "Jogging" },
  { src: "🎸", name: "Play Guitar" },
  { src: "🎨", name: "Painting" },
  { src: "🎉", name: "Party" },
  { src: "🛍", name: "Shopping" },
  { src: "🎮", name: "Gaming" },
  { src: "📝", name: "Writing" },
  { src: "📊", name: "Trading" },
  { src: "😍", name: "Loving" },
  { src: "💻", name: "Working" },
  { src: "📚", name: "Reading" },
  { src: "💧", name: "Drink" },
];
function Items() {
  return (
    <>
      <div className="grid grid-cols-3 gap-4 justify-items-center mt-8">
        {activities.map((activity) => (
          <Activity
            src={activity.src}
            alt={activity.alt}
            name={activity.name}
          />
        ))}
      </div>
    </>
  );
}

export default Items;
