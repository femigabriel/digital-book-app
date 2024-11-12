import React, { useState } from "react";
import Image from "next/image";
import { Tabs, Checkbox } from "antd";

interface Trait {
  id: number;
  title: string;
  text: string;
}

interface Props {
  onNextClick: () => void;
  onBackClick: () => void;
  setSelectedWord: (word: string) => void;
}

const { TabPane } = Tabs;

const positiveTraits: Trait[] = [
  { id: 1, title: "Empathy", text: "Understanding and sharing the feelings of others." },
  { id: 2, title: "Kindness", text: "Being considerate and friendly toward others." },
  { id: 3, title: "Respectfulness", text: "Valuing others' opinions, feelings, and personal space." },
  { id: 4, title: "Cooperation", text: "Working well with others to achieve common goals." },
  { id: 5, title: "Responsibility", text: "Being accountable for one's actions and obligations." },
  { id: 6, title: "Honesty", text: "Being truthful and transparent in communication." },
  { id: 7, title: "Tolerance", text: "Accepting and respecting differences in others." },
  { id: 8, title: "Active Listening", text: "Paying attention and responding thoughtfully to others' needs." },
  { id: 9, title: "Patience", text: "Remaining calm and understanding when things don't go as planned." },
  { id: 10, title: "Supportiveness", text: "Providing help and encouragement to friends and peers." },
  { id: 11, title: "Open-mindedness", text: "Being willing to consider new ideas and viewpoints." },
  { id: 12, title: "Self-Discipline", text: "Controlling impulses and staying focused on goals." },
  { id: 13, title: "Inclusiveness", text: "Making an effort to include others in activities and conversations." },
  { id: 14, title: "Assertiveness", text: "Expressing thoughts and feelings confidently while respecting others." },
  { id: 15, title: "Forgiveness", text: "Letting go of grudges and being willing to move on." },
  { id: 16, title: "Gratitude", text: "Acknowledging and expressing thanks for the good things in life." },
  { id: 17, title: "Cheerfulness", text: "Displaying a positive attitude and uplifting others." },
  { id: 18, title: "Friendliness", text: "Being approachable and warm in interactions with others." },
  { id: 19, title: "Problem-solving", text: "Approaching challenges with creativity and resilience." },
  { id: 20, title: "Compassion", text: "Showing genuine concern for the wellbeing of others." },
];

const negativeTraits: Trait[] = [
  { id: 1, title: "Selfishness", text: "Prioritizing own needs over those of others." },
  { id: 2, title: "Rudeness", text: "Being disrespectful or impolite to others." },
  { id: 3, title: "Dishonesty", text: "Lying or being untruthful in communication." },
  { id: 4, title: "Intolerance", text: "Being unwilling to accept differences in others." },
  { id: 5, title: "Jealousy", text: "Resentment toward others for their success or possessions." },
  { id: 6, title: "Arrogance", text: "Having an inflated sense of self-importance." },
  { id: 7, title: "Negativity", text: "Focusing on the negative aspects of situations instead of the positive." },
  { id: 8, title: "Gossiping", text: "Spreading rumors or talking behind others' backs." },
  { id: 9, title: "Stubbornness", text: "Refusing to change one's mind or listen to others' perspectives." },
  { id: 10, title: "Impulsiveness", text: "Acting without thinking through the consequences." },
  { id: 11, title: "Disrespectfulness", text: "Not valuing others' feelings or opinions." },
  { id: 12, title: "Disloyalty", text: "Betraying others or not being trustworthy." },
  { id: 13, title: "Bullying", text: "Intentionally harming others physically or emotionally." },
  { id: 14, title: "Laziness", text: "Avoiding effort or responsibility in group settings." },
  { id: 15, title: "Gossiping", text: "Spreading rumors or talking behind others' backs." },
  { id: 16, title: "Defensiveness", text: "Reacting negatively to constructive criticism." },
  { id: 17, title: "Intolerance", text: "Being unwilling to accept differences in others." },
  { id: 18, title: "Disharmony", text: "Creating conflict or tension in group interactions." },
  { id: 19, title: "Whining", text: "Constantly complaining without taking responsibility." },
  { id: 20, title: "Arrogance", text: "Having an inflated sense of self-importance." },
];

const TraitList = ({
  traits,
  onSelect,
  selectedTraits,
}: {
  traits: Trait[];
  onSelect: (trait: Trait) => void;
  selectedTraits: Trait[];
}) => (
  <div className="grid grid-cols-2 gap-4">
    {traits.map((trait) => {
      const isSelected = selectedTraits.some((t) => t.id === trait.id);
      return (
        <div
          key={trait.id}
          className={`mb-5 px-3 py-3 rounded cursor-pointer ${
            isSelected ? "bg-[#ED008C] shadow text-white" : "shadow"
          }`}
          onClick={() => onSelect(trait)}
        >
          <div className="flex items-start">
            <Checkbox
              className="mr-2"
              checked={isSelected}
              onChange={() => onSelect(trait)}
            />
            <div>
              <h3 className=" text-base font-bold">
                {trait.id}. {trait.title}
              </h3>
              <p className="text-sm">{trait.text}</p>
            </div>
          </div>
        </div>
      );
    })}
  </div>
);

export const Activity1 = ({ onNextClick, onBackClick, setSelectedWord }: Props) => {
  const [selectedTraits, setSelectedTraits] = useState<Trait[]>([]);

  const handleSelect = (trait: Trait) => {
    setSelectedTraits((prev) =>
      prev.includes(trait) ? prev.filter((t) => t.id !== trait.id) : [...prev, trait]
    );
    setSelectedWord(trait.title);
  };

  return (
    <div className="w-full bg-[#FFFEE9]">
      <div className="px-10  py-5 h-[90px] gradient-border shadow flex justify-between items-center">
        <button onClick={onBackClick}>
          <Image
            src="/images/Back Button.svg"
            alt="Back Button"
            width={115}
            height={45}
            className="max-w-full h-auto"
            draggable="false"
          />
        </button>
        <button>
          <Image
            src="/images/Frame 110.svg"
            alt="More info"
            width={251}
            height={45}
            className="max-w-full h-auto"
            draggable="false"
          />
        </button>
      </div>
      <div className="self-awareness w-full h-full bg-[#FFFEE9]">
        <div className="bg-[#FFFEE9] w-full max-w-[750px] rounded-[10px] shadow-xl p-5">
          <div className="flex flex-col justify-center items-center mb-7">
            <h3 className="text-[#CA0077] text-xl">Activity</h3>
            <h4 className="text-3xl">Self-Awareness</h4>
            <p className="text-[#3F3F46] text-base font-bold">Name it and Claim it!</p>
          </div>
          <Tabs type="card" className="self-awareness-tabs">
            <TabPane tab={<span>Positive Traits</span>} key="1" className="">
              <TraitList traits={positiveTraits} onSelect={handleSelect} selectedTraits={selectedTraits} />
            </TabPane>
            <TabPane tab={<span>Negative Traits</span>} key="2">
              <TraitList traits={negativeTraits} onSelect={handleSelect} selectedTraits={selectedTraits} />
            </TabPane>
          </Tabs>
          <div className="mt-7">
            <button className="bg-[#FAD8E3] w-full" onClick={onNextClick}>
              <Image
                src="/images/Button next.svg"
                alt="Next Button"
                width={64}
                height={64}
                className="max-w-full w-full h-auto"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
