import React from 'react';

const TimelineItem = ({ date, title, isActive, onClick }) => (
  <div 
    className={`flex items-center mb-8 cursor-pointer group ${isActive ? 'opacity-100' : 'opacity-60'}`}
    onClick={onClick}
  >
    <div className="relative">
      <div className={`w-3 h-3 rounded-full ${isActive ? 'bg-purple-600' : 'bg-gray-400'} group-hover:bg-purple-600`} />
      <div className={`absolute h-full w-0.5 top-3 left-1 ${isActive ? 'bg-purple-600' : 'bg-gray-300'} -z-10`} />
    </div>
    <div className="ml-4">
      <p className="text-sm text-gray-500">{date}</p>
      <p className="text-sm font-medium truncate max-w-[150px]">{title}</p>
    </div>
  </div>
);

const Timeline = () => {
  const [activeItem, setActiveItem] = React.useState(null);

  const timelineData = [
    {
      date: "Dec 15-17, 2023",
      title: "Quokkas at Rottnest Island"
    },
    {
      date: "Dec 15-17, 2023",
      title: "Great Ocean Road Adventure"
    },
    {
      date: "Nov 1-5, 2023",
      title: "Sydney Weekend Getaway"
    },
    {
      date: "Oct 10-14, 2023",
      title: "Little Penguin Parade"
    },
    {
      date: "Oct 10-14, 2023",
      title: "A Week in Tasmania"
    },
    {
      date: "Oct 10-14, 2023",
      title: "Gold Coast Paradise"
    }
  ];

  const handleItemClick = (index) => {
    setActiveItem(index);
    // You could add scroll functionality here to scroll to the corresponding card
    const cards = document.querySelectorAll('.travel-card');
    if (cards[index]) {
      cards[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg max-h-[80vh] overflow-y-auto">
      <div className="space-y-2">
        {timelineData.map((item, index) => (
          <TimelineItem
            key={index}
            date={item.date}
            title={item.title}
            isActive={activeItem === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
