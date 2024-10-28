import React from "react";
import HTMLFlipBook from "react-pageflip";
import Image from "next/image";
import { PageIllustrator } from "./PageIllustrator";
import { PageContent } from "./PageContent";
import { StudentDashboardHeader } from "../student-dashboard/StudentDashboardHeader";

export default function ReadBookPage() {
  return (
    <div className=" h-full bg-[#FFFEE9]">
      <div className="">
        <StudentDashboardHeader />
      </div>
      <div className="flex justify-center items-center w-full  h-screen lg:h-full lg:py-10">
        <HTMLFlipBook
          width={500}
          height={600}
          className="bg-[#FFFEE9] shadow-lg rounded"
          style={{ background: "#FFFEE9" }}
          startPage={0}
          flippingTime={1000}
          size={"fixed"}
          minWidth={500}
          maxWidth={500}
          minHeight={600}
          maxHeight={600}
          drawShadow={true}
          usePortrait={true}
          startZIndex={0}
          autoSize={true}
          maxShadowOpacity={1}
          showCover={false}
          mobileScrollSupport={true}
          clickEventForward={true}
          useMouseEvents={true}
          swipeDistance={0}
          showPageCorners={true}
          disableFlipByClick={false}
        >
          {/* 1st page */}
          <div className="bg-[#E1D1F6] h-full w-full flex justify-center items-center">
            <div className="h-full w-full bg-[#E1D1F6] px-5 lg:px-10 lg:py-5">
              <Image
                width={300}
                height={300}
                src="/assets/illustrators/book-cover-1.svg"
                className="w-full h-full cursor-pointer"
                alt="avatar"
              />
            </div>
          </div>

          <div className="bg-[#F8F8F8]">
            <Image
              width={300}
              height={300}
              src="/assets/illustrators/book-cover-2.svg"
              className="w-full h-full cursor-pointer"
              alt="avatar"
            />
          </div>

          {/* 2nd page */}

          <div>
            <PageIllustrator
              illustrator={
                <Image
                  width={300}
                  height={300}
                  src="/assets/illustrators/PG1 1.svg"
                  className="w-full h-full cursor-pointer"
                  alt="page"
                />
              }
            />
          </div>
          <div>
            <PageContent
              content="Charlie was too excited to sleep as most kids her age! She was going to
          5th grade and as the “seniors” of the school, she wanted to make sure
          that she made a good first impression. She was knee deep in new outfits
          sprayed all over her pink and purple room. Her bed housed the tops and
          bottoms that she laid out just so, as to see how it would look on her.
          The pink carpet was the spot for the array of shoes that matched each
          outfit to a tee. Charlie walks by each choice giving her degreed levels
          of acceptance or rejection. She looks at a rocker tee with jeans and
          pair of converse, “No that will never work.” She picks up a denim skirt
          and matching jacket with a cute heart on the back that reads the name,
          “Charlie” in graffiti on the back and still shakes her head, “This is
          still not going to do!” Charlie’s mom Cindy sticks her head in to her
          room."
              pageNumber={2}
            />
          </div>

          {/* 3rd page */}

          <div>
            <PageIllustrator
              illustrator={
                <Image
                  width={300}
                  height={300}
                  src="/assets/illustrators/PG2 1.svg"
                  className="w-full h-full cursor-pointer"
                  alt="page"
                />
              }
            />
          </div>
          <div>
            <PageContent
              content="“Hello, my little senior, what are you up to?”
           Charlie Plops on the bed and lets out an exasperated sigh as she pushes her clothes to the side.
           Cindy walk into the room.
           “I’m not really a senior,” Charlie retorted with slyness.
           “Well, you are 5th grade and the oldest in the school, so that makes you sort of a senior.”
           “I guess.” Charlie stays with her head held low and crawls into her mother’s lap.“What’s wrong now, because there are kids in the world with real problems? Guess what?! They
           don’t even include picking out a cute outfit for the first day of school!?”
           “I know like the kids you work with that are alone and away from their parents.”
           “Yes, these kids not only are away from their parents but they are away from their homes. Some
           of these kids would have literally walked hundreds of miles to get the United Sates border only
           to be torn from their mothers.”"
              pageNumber={3}
            />
          </div>

          {/* 4th page */}
          <div>
            <PageIllustrator
              illustrator={
                <Image
                  width={300}
                  height={300}
                  src="/assets/illustrators/PG2 1.svg"
                  className="w-full h-full cursor-pointer"
                  alt="page"
                />
              }
            />
          </div>
          <div>
            <PageContent
              content="“That’s horrible!”
            Charlie buries her head in her mother’s lap and begins to sob.
            Cindy gently pulls Charlie’s head up and wipes her tears away and kisses her forehead.
            “I didn’t tell you that to make you cry. I just want you to put things in perspective.”
            “You want me to look at another view,” Charlie sobbed.
            “Yes, and maybe just maybe, your outfit yes has to be cute, but it doesn’t have to be that
            important, right?”
            “No, it’s not,” Charlie sighed realizing her decisions.
            “Then let’s focus on having a fun year and stay focused on what...?”
            “Being a productive citizen of the world.” Charlie chimed in a reassuring voice.“That’s my girl!” Cindy blurted out with joy!
            Charlie and Cindy high-five and hug and Cindy goes to the door. “Mom?”
            “Yes.”"
              pageNumber={4}
            />
          </div>

          {/* 5th page */}
          <div>
            <Image
              width={300}
              height={300}
              src="/assets/illustrators/PG4 2.svg"
              className="w-full h-full cursor-pointer"
              alt="avatar"
            />
          </div>
          <div>
            <PageContent
              content="Charlie walks over and holds up her pink tutu and jean vest outfit, with the purple tie-dye shirt. “How about this one for tomorrow?”
           Cindy nods her head in agreement.
           “It’s perfect, just like you.”
           Charlie sleeps next to her outfit and when the alarm clock goes off, she groggily hits the snooze
           button and tries to get a few more minutes of sleep. She throws the blankets over her head and
           bundles down in slumber.
           Cindy opens the door and peeps in on Charlie.
           “Are you going to miss the first day of 5th grade, my senior?”
           “Huh, what? Oh my God!”
           Charlie pops her head up and jumps out of the bed and tumbles to the floor. “Please don’t break an arm trying to get to school today.” Charlie jumps up and rushes to the bathroom as she tries to get her bearings together for her day."
              pageNumber={5}
            />
          </div>

          {/* 6th page */}
          <div>
            <PageIllustrator
              illustrator={
                <Image
                  width={300}
                  height={300}
                  src="/assets/illustrators/PG4 2.svg"
                  className="w-full h-full cursor-pointer"
                  alt="page"
                />
              }
            />
          </div>
          <div>
            <PageContent
              content="“I’ll be ready in 15 minutes, I took my shower last night.”
            “Well I hope so.”
            Cindy closes the door and leaves Charlie to get ready....40 MINUTES LATER....
            Charlie comes charging down the stairs while Cindy stands by the door with her lunchbox and a
            smoothie.
            “Mom, time flew by!”
            “I know, here’s lunch and a smoothie breakfast.”
            “Thanks, Mom!”
            Charlie dashes out of her front door and makes her way to the corner where she slyly slows down
            to a cool trot as to not lose her cool on the first day. As Charlie arrives three other friends meet
            her and they hug one another like they hadn’t seen one another in years.
            “Charlie!!!” screamed the girls in unison."
              pageNumber={6}
            />
          </div>

          {/* 7th page */}

          <div>
            <PageIllustrator
              illustrator={
                <Image
                  width={300}
                  height={300}
                  src="/assets/illustrators/PG 6 1.svg"
                  className="w-full h-full cursor-pointer"
                  alt="page"
                />
              }
            />
          </div>
          <div>
            <PageContent
              content="Charlie smiled and hugged everyone back with an abundance of love and a welcoming spirit. “I missed you guys!” Charlie gleamed. Charlie looks around and notices that one of her dear friends are missing, so she turns from her
           hug and looks down the street. “Where is Mya?” Charlie asked with concern. One of the girls, looks around and shrugs as they hadn’t even noticed that she was not with them.
           As the four girls hug for what seemed like an eternity, the bus creeps up to a light halt and allows
           everyone to board. Just as the doors were about to close, Mya comes dashing through the bus
           doors in complete disarray with her clothes sloppy and hair flying to and from in the wind. The
           children bursts out into laughter, and Charlie becomes immediately protective of her friend.
           Charlie stands up and shouts."
              pageNumber={7}
            />
          </div>

          {/* 8th page */}
          <div>
            <PageIllustrator
              illustrator={
                <Image
                  width={300}
                  height={300}
                  src="/assets/illustrators/PG7 1.svg"
                  className="w-full h-full cursor-pointer"
                  alt="page"
                />
              }
            />
          </div>
          <div>
            <PageContent
              content="As they arrive to school, Mya doesn’t move a muscle and Charlie just sits with her as the boys
             and girls exit the bus. The bus driver gives them a few moments to gather themselves, then
             gently tells them that it’s time for school.
             “Hey there girls, it’s time.”
             Charlie looks up and then over at Mya.
             “Mya, we have to go, okay.”
             Mya breaths as if she has exhaled her entire life out of her body then she begins to cry.
             “Please tell me what’s wrong?” Charlie pleaded.
             “They took my dad last night, and now I’m scared they are coming for my mom. I will be all
             alone.”
             Charlie holds Mya as she cries in her shoulder, while the bus driver walks to check on them.
             “Are you girls, okay?” asked the bus driver.
             Charlie looks up and smiles."
              pageNumber={8}
            />
          </div>

          {/* 9th page */}
          <div>
            <PageIllustrator
              illustrator={
                <Image
                  width={300}
                  height={300}
                  src="/assets/illustrators/PG8 1.svg"
                  className="w-full h-full cursor-pointer"
                  alt="page"
                />
              }
            />
          </div>
          <div>
            <PageContent
              content="“She’s having a really bad morning.” Charlie tried to explain. “I understand, but I have to get to my next route, how about I walk you two into the office to see
             the counselor.”, the bus driver pleaded. “Okay, we can do that.” Charlie took a breath as to try to calm Mya and her tears. Mya didn’t
             look up, she was inconsolable. Charlie gently nudged Mya to her feet and they began to walk
             behind the bus driver. As they entered the doors of the school the bustle of children, teachers,
             and administrators, the scene was chaotic, was too much.
             A strange look came across Charlie’s face as a light bulb idea danced in her head, she quickly
             turned to the bus driver.
             “I have it from here, we are going to go to the counselor’s office and then we’ll go to breakfast.”
             “Okay, you girls take care and have a great first day of school.” the bus driver declared, then he
             looked at Mya."
              pageNumber={9}
            />
          </div>

          {/* 10th page */}
          <div>
            <PageIllustrator
              illustrator={
                <Image
                  width={300}
                  height={300}
                  src="/assets/illustrators/PG 9, 10 1.svg"
                  className="w-full h-full cursor-pointer"
                  alt="page"
                />
              }
            />
          </div>
          <div>
            <PageContent
              pageNumber={10}
              content="“Well at least the best day that you can have”, as he patted Mya on her back. With that kind
           gesture, he turned and walked away as Charlie watched his every move. Once he was a clear
           distance away, Charlie rushed Mya in to the bathroom.
           “Mya, I need you to pull yourself together because we are going to find your father.” Mya looks up and pulls her hair from her eyes and gives Charlie her full attention.
           “Huh?” Maya Chimed in.“Look we can stand around all day and say how sorry we feel for you, but words don’t do things,
           actions do! My mom always says that. I overheard her saying that she has to go to the ICE
           detention center downtown to help some clients. So I bet that’s where your dad is, and we are
           going.”
           Mya still looks shocked and bewildered.
           “How are we going to get there?”
           "
            />
          </div>

          {/* 11th page */}
          <div>
            <PageIllustrator
              illustrator={
                <Image
                  width={300}
                  height={300}
                  src="/assets/illustrators/PG 9, 10 1.svg"
                  className="w-full h-full cursor-pointer"
                  alt="page"
                />
              }
            />
          </div>
          <div>
            <PageContent
              pageNumber={11}
              content="“We’ll catch the bus, I’ll use my backup lunch money.”
          “Backup lunch money?”
          “Yeah, the money I bring just in case my packed lunch sucks!”
          Mya looks bewildered and Charlie places her hand on her friend’s back to comfort her. “Look Mya, I know this is a lot, and I don’t want to scare you, but I over hear my mom talking to
          my dad about what happens to people when they get snatched by ICE. We don’t have much time
          if we want to save your dad.”
          “Won’t we get in trouble?” Mya asked with a look of sheer fear. “Our moms are not going to be happy and neither will the school, but we have to do this. My
          mom just told me yesterday that there are things that are bigger than me, and this is one of them.
          We have to find your dad. Are you with me?”
          Mya wipes her face and sits up a little higher with confidence.
          “Yes, I’m with you.””
          "
            />
          </div>

          {/* 12th page */}
          <div>
            <PageIllustrator
              illustrator={
                <Image
                  width={300}
                  height={300}
                  src="/assets/illustrators/PG11 1.svg"
                  className="w-full h-full cursor-pointer"
                  alt="page"
                />
              }
            />
          </div>
          <div>
            <PageContent
              pageNumber={12}
              content="Charlie walks to the door and peeps around the corner at the chaos and bustle of the first day of
            school.
            “Now, we have to count on the melt-downs.”, Charlie turned to Mya with a smirk.
            “What are melt-downs?”
            “That’s when the pre-k or kindergarten students cry uncontrollably, and all the adults pull
            together to get them to stop.”
            “Oh.”
            “They usually have about five to six the first day of school every morning, and that will be our
            chance to slip out of the back door and catch the bus right around the block.”
            “How do you know all this stuff?” “I have no idea; just stuff I guess I noticed.” “Well you notice a lot.” Maya says with admiration.
            “I guess.””
            "
            />
          </div>

          {/* 13th page */}
          <div>
            <PageIllustrator
              illustrator={
                <Image
                  width={300}
                  height={300}
                  src="/assets/illustrators/PG11 1.svg"
                  className="w-full h-full cursor-pointer"
                  alt="page"
                />
              }
            />
          </div>
          <div>
            <PageContent
              pageNumber={13}
              content="As Charlie peeps her head out of the bathroom two children begin their meltdown than a third
          and fourth chime in and all the adults go scattering to tend to the children.
          Charlie waves Mya over.
          “Now is our time, we have to go.” Charlie and Mya pull back, and they gather their book bags and other items and quickly head
          toward the door in a calm but concentrated trot. As they exit, they don’t look back until Charlie
          reaches for the door handle to make sure that the door does not make a sound. They continue to
          walk as they pass parents and children going into the school and they walk to the path and don’t
          look back until they reach the path shaded by trees and can no longer be seen by the school.”
          "
            />
          </div>

          {/* 14th page */}
          <div>
            <PageIllustrator
              illustrator={
                <Image
                  width={300}
                  height={300}
                  src="/assets/illustrators/PG12 ,13 1.svg"
                  className="w-full h-full cursor-pointer"
                  alt="page"
                />
              }
            />
          </div>
          <div>
            <PageContent
              pageNumber={14}
              content="Charlie and Mya get to the bus stop just in time as the bus comes to a stop. Just then a man with
          a bike rushes to the bus as the door opens and he waves for assistance from the bus driver. As the driver brushes by them they hurriedly get on the bus and pay their fare and take their seat.
          “See Mya it’s our day, that guy with the bike is just like the pre-kindergarteners with their
          meltdowns. He got the attention off of us!” Mya smiles as if all of her problems have melted away and she was assured that she would soon
          be in the arms of her beloved father. Charlie looks around the bus and sees people in their own
          worlds listening to music and nodding off as the bus rolls off into traffic.
          “How long is it going to take to get there?” Mya asked.
          “I don’t know, I just know that it’s downtown and I know Five Points is downtown, so we’ll go
          there.””
          "
            />
          </div>

          {/* 15th page */}
          <div>
            <PageIllustrator
              illustrator={
                <Image
                  width={300}
                  height={300}
                  src="/assets/illustrators/PG12 ,13 1.svg"
                  className="w-full h-full cursor-pointer"
                  alt="page"
                />
              }
            />
          </div>
          <div>
            <PageContent
              pageNumber={15}
              content="Mya’s smile began to fade. “Do you know where we’re going?” Mya asked full of weariness.
          “Don’t worry, we will find it.” Charlie puts her arm around Mya and holds her tight as Charlie looks out of the bus window with
          a look a sheer fear across her face for the first time.
          “Charlie?”
          “Yes, Mya?”
          “Thank you.”
          “Thank me for what, we haven’t even gotten there yet?” 
          “I know, but at least you tried. Everyone else would just stand back and say it’s going to be okay and then move on. At least you tried.”
          And with those words Charlie is rejuvenated once again in her cause to find Mya’s dad. She
          turns and faces Mya once again very reassured.”
          "
            />
          </div>

          {/* 16th page */}
          <div>
            <PageIllustrator
              illustrator={
                <Image
                  width={300}
                  height={300}
                  src="/assets/illustrators/PG15 1.svg"
                  className="w-full h-full cursor-pointer"
                  alt="page"
                />
              }
            />
          </div>
          <div>
            <PageContent
              pageNumber={16}
              content="“That’s what good friends are for, and we’re going to find your dad.”
            Charlie looks at the map and points her finger at what she thinks will be the place that they get
            off of the bus.
            “I think that stop is the best one.” Charlie looks up at the bus driver as to not alert him of their presence. As Charlie sees the bus
            driver deep in thought and driving to his own beat, she looks around for someone friendly to ask
            about how many stops they are going to take. Charlie finds a nice guy two seats back from she
            and Mya and waves to get his attention. “Hello, we’re looking to get to downtown, how many stops?”
            The man smiles at the girls in bewilderment, and with caution speaks.
            “Well you have about four more stops” the man said looking more and more suspicious of the
            girls. “I have to ask, aren’t you two supposed to be in school at this time of morning?””
            "
            />
          </div>

          {/* 17th page */}
          <div>
            <PageIllustrator
              illustrator={
                <Image
                  width={300}
                  height={300}
                  src="/assets/illustrators/PG12 ,13 1.svg"
                  className="w-full h-full cursor-pointer"
                  alt="page"
                />
              }
            />
          </div>
          <div>
            <PageContent
              pageNumber={17}
              content="Charlie smiles and quickly blurts out an answer. “We’re going to school, we go to school downtown.”
          Mya turns around and tries not to face the man as she was not good with telling untruths to
          adults, and she didn’t want to mess up anything. “Oh okay, when I was in school we rode the big yellow bus, “The Big Cheese”, laughed the man.
          Charlie laughed with the man and turned around like Mya, she knew the less she told the untruth
          the better she would be. The man just kept his chuckle, then went back to listening to his music.
          As the girls rode in silence, they began to count the stops as they got closer to the city skyline
          and sat in awe as the tiny buildings began to become much bigger.
          “We’re almost there, we are this much closer to finding your dad.”
          “Thank you, Charlie,” giving Charlie a gaze that held on to a little hope.”
          "
            />
          </div>

          {/* 18th page */}
          <div>
            <PageIllustrator
              illustrator={
                <Image
                  width={300}
                  height={300}
                  src="/assets/illustrators/PG 14 1.svg"
                  className="w-full h-full cursor-pointer"
                  alt="page"
                />
              }
            />
          </div>
          <div>
            <PageContent
              pageNumber={18}
              content="The girls sat back in their seats and rode in solidarity as they awaited for what their trip would
            bring them. As the bus came to the their stop, they got up rang the bell line as they had seen the
            adults do and walked to the back door and looked out at the big world that was in front of them.
            They pushed at the door and stepped out and was hit immediately with the hustle and bustle of a
            hectic Monday morning. Mya looked at Charlie with slight terror, trying to stay hopeful. “What do we do, where do we go?” Mya whispered out.
            Charlie as always trying to control everything and make everything seem easy-peezy. She looked
            Mya straight in the eye and looked forward and just pointed at the first buildings she saw.”
            "
            />
          </div>

          {/* 19th page */}
          <div>
            <PageIllustrator
              illustrator={
                <Image
                  width={300}
                  height={300}
                  src="/assets/illustrators/PG 14 1.svg"
                  className="w-full h-full cursor-pointer"
                  alt="page"
                />
              }
            />
          </div>
          <div>
            <PageContent
              pageNumber={19}
              content="“Let’s go that way?” Charlie pointed and Mya followed and they both headed off on an
            adventure that they had not planned for nor wanted, but deemed impossible to ignore. As the
            girls walk up the hill toward the buildings, they see a police officer headed straight for them and
            they panic. “Is he going to arrest us?” Mya asked in a panic.
            “No, all he can do is ask us a few questions, don’t worry, I’ll do all the talking.
            As the police man got closer, someone yelled out “Help, I’ve fallen!”, and the officer took his
            gaze from us and planted it toward the elderly woman that needed his immediate assistance.
            “Whew, another meltdown that saved the day.” said Mya.
            “You got that right!” Charlie exclaimed through a sigh of relief.
            Let’s just go and fast.”
            "
            />
          </div>

          {/* 20th page */}
          <div>
            <PageIllustrator
              illustrator={
                <Image
                  width={300}
                  height={300}
                  src="/assets/illustrators/PG 17 1.svg"
                  className="w-full h-full cursor-pointer"
                  alt="page"
                />
              }
            />
          </div>
          <div>
            <PageContent
              pageNumber={20}
              content=" Mya and Charlie keep moving past all of the hustle and bustle of the morning and tried to stay as
off the grid as possible. As they move while looking back at the police officer they don’t notice
as they run smack dab into Charlie’s mom, Cindy, as she fumes. “Charlie, where in the world have you been!?” Cindy spews in anger.
Charlie slowly turns around to face her mother that is so mad you can see the steam coming from
her head. Charlie quickly turns to Mya and she bursts out into tears and for a minute, Cindy goes
to comfort Mya. “Mya, I’m not angry with you guys, I was just worried. You guys could have been taken or
worse. Thank God Charlie your cell phone was on and I was able to track you.”
Mya continues to cry but then gathers herself to speak."
            />
          </div>

          {/* 21th page */}
          <div>
            <PageIllustrator
              illustrator={
                <Image
                  width={300}
                  height={300}
                  src="/assets/illustrators/PG 17 1.svg"
                  className="w-full h-full cursor-pointer"
                  alt="page"
                />
              }
            />
          </div>
          <div>
            <PageContent
              pageNumber={21}
              content="“Charlie was helping me find my dad, they took him?” Mya began to sob once again.
            Cindy looks at Charlie and then back at Mya.
            “Who took him baby?”
            Mya grasps for air as she speaks.
            “The ICE agents, they are going to send him away and I just want to see him.”
            Cindy takes Mya in her arms and holds her as she sobs.
            “It’s going to be okay,”
            Charlie looks over at her mom.
            “But it’s not going to be okay, if we don’t get to see him. We need to know where he is.”
            Cindy lets go of Mya and looks at them both. Charlie grabs her mom’s hand.
            “Mom, you told me that there were bigger things than myself, and this is bigger.”"
            />
          </div>

          {/* 22th page */}
          <div>
            <PageIllustrator
              illustrator={
                <Image
                  width={300}
                  height={300}
                  src="/assets/illustrators/PG 17 1.svg"
                  className="w-full h-full cursor-pointer"
                  alt="page"
                />
              }
            />
          </div>
          <div>
            <PageContent
              pageNumber={22}
              content="Cindy looks at both girls and both girls look back and forth then back at her, and Cindy caves.
            “You both are in big trouble, but for now you are right Charlie we have to find Mya’s dad.”
            Charlie hugs her mom tightly.
            “Thank you so much mom, we are sorry.”
            “I know you both are, now let’s go and find your dad Mya.”
            Cindy, Charlie, and Mya stride up the hill and straight for the ICE office. They open the door to
            the building and are hit with families in complete disarray. Mya moves back in fear as Cindy
            reaches down to reassure her.
            “We are going to find your dad, don’t be scared. These people are just worried about their
            families just like you are. It’s going to be fine”, Cindy said with a look that made Mya feel like
            everything was going to be okay. Mya looks up with eyes widened with a smile of confidence."
            />
          </div>

          {/* 23th page */}
          <div>
            <PageIllustrator
              illustrator={
                <Image
                  width={300}
                  height={300}
                  src="/assets/illustrators/PG 21 DOWN 2.svg"
                  className="w-full h-full cursor-pointer"
                  alt="page"
                />
              }
            />
          </div>
          <div>
            <PageContent
              pageNumber={23}
              content="“Yes, everything is going to be fine,” Mya says as she moves toward the door.Cindy walks the girls to a window in the front and places the girls to her side as she speaks to the
          window clerk. The girls look around the room as people are wondering and asking questions
          about their loved ones. The room seems to be in total chaos, and when a back door opens, Mya
          sees her dad being moved in a line with other men.
          “There he is”, Mya exclaimed with a shriek of joy and terror. and Charlie look in the direction Mya’s gaze and find Mr. Martinez nodding his head and
          smiling. Cindy turns to the lady in the window.
          “I am his lawyer and I need to see him immediately.” Cindy respectfully states to the lady in the
          window.
          “Yes, as soon as he processed in our system, they have just arrived. I will go back and get him
          personally.”"
            />
          </div>

          {/* 24th page */}
          <div>
            <PageIllustrator
              illustrator={
                <Image
                  width={300}
                  height={300}
                  src="/assets/illustrators/PG 21 DOWN 2.svg"
                  className="w-full h-full cursor-pointer"
                  alt="page"
                />
              }
            />
          </div>
          <div>
            <PageContent
              pageNumber={24}
              content="“Thank you.”
            Charlie, Mya, and Cindy wait on Mr. Martinez to be released and after checking the clock many
            times over, Mr. Martinez comes through the door. Mya runs and jumps in his arms!
            “Papa”, Mya exclaimed. “I came for you!”Mr. Martinez holds Mya as tears run down his face, and Mya pushes back to see his tears.
            “What’s wrong Papa?”
            “Nothing I’m just so glad to see you, I never thought I’d see you again.”
            Cindy bends down and places her hand on Mr. Martinez’s back.“Please don’t worry, I am going to work very hard to make sure that you are back with your
            family very soon.”
            “Thank you, thank you so much.” Mr. Gomes said."
            />
          </div>

          {/* 25th page */}
          <div>
            <Image
              width={300}
              height={300}
              src="/assets/illustrators/PG 21 DOWN 2.svg"
              className="w-full h-full cursor-pointer"
              alt="avatar"
            />
          </div>
          <div>
            <PageContent
              pageNumber={25}
              content="Charlie reaches around Mya and Mr. Martinez and hugs them both.
          “We’re going to make sure you all are a family again. It may take some time, but my mom is on
          it! It’s our Something Bigger Gift.” Charlie said reaching for her mother’s hand while holding
          the embrace.
          
          The End"
            />
          </div>

          {/* closig page page */}
          <div className="bg-[#E1D1F6] h-full w-full flex justify-center items-center">
            <div className="h-full w-full bg-[#E1D1F6] px-5 lg:px-10 lg:py-5">
              <Image
                width={300}
                height={300}
                src="/assets/illustrators/back cover book.svg"
                className="w-full h-full cursor-pointer"
                alt="avatar"
              />
            </div>
          </div>
          <div className="bg-[#F8F8F8]">
            <Image
              width={30}
              height={30}
              src="/assets/illustrators/page26.png"
              className="w-full h-full cursor-pointer"
              alt="avatar"
            />
          </div>
        </HTMLFlipBook>
      </div>
    </div>
  );
}
