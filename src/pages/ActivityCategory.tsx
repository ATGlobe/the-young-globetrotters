import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { CATEGORY_ACTIVITIES } from '../data/activities';
import Hero from '../components/Hero';
import { ArrowLeft } from 'lucide-react';
import { InteractiveQuiz } from '../components/activities/InteractiveQuiz';
import { MovementChallenge } from '../components/activities/MovementChallenge';
import { CreativeChallenge } from '../components/activities/CreativeChallenge';
import { BadgeTracker } from '../components/activities/BadgeTracker';

export default function ActivityCategory() {
  const { category } = useParams<{ category: string }>();
  const activity = category ? CATEGORY_ACTIVITIES[category] : null;

  const [quizDone, setQuizDone] = useState(false);
  const [moveDone, setMoveDone] = useState(false);
  const [creativeDone, setCreativeDone] = useState(false);

  if (!activity) {
    return <Navigate to="/activities" replace />;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Hero 
        title={activity.title}
        subtitle={`Explore the world through ${category}! Let's learn, move, and create together.`}
        bgColor={activity.color}
        image={activity.heroImage}
      />

      <div className="max-w-7xl mx-auto px-4 py-20">
        <Link 
          to="/activities" 
          className="inline-flex items-center gap-2 text-slate-500 font-bold mb-12 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to All Activities
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          <MovementChallenge 
            title={activity.physicalActivity.title}
            description={activity.physicalActivity.description}
            color={activity.color}
            accentColor={activity.accentColor}
            icon={activity.icon}
            onComplete={() => setMoveDone(true)}
          />

          <InteractiveQuiz 
            question={activity.quiz.question}
            options={activity.quiz.options}
            correct={activity.quiz.correct}
            color={activity.color}
            accentColor={activity.accentColor}
            onComplete={() => setQuizDone(true)}
          />

          <CreativeChallenge 
            title={activity.creativeChallenge.title}
            description={activity.creativeChallenge.description}
            color={activity.color}
            accentColor={activity.accentColor}
            category={activity.id}
            onComplete={() => setCreativeDone(true)}
          />
        </div>
      </div>

      <BadgeTracker 
        quizDone={quizDone}
        moveDone={moveDone}
        creativeDone={creativeDone}
      />

      {/* Foxy's Growth Journey (Mini Version) */}
      <section className="bg-white py-20 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-bold uppercase tracking-widest mb-6">
            Foxy's Growth Journey
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">The Real Badge</h2>
          <p className="text-lg text-slate-600 leading-relaxed italic mb-8">
            "Foxy once thought that only the Golden Winged Badge could make him a real explorer. 
            But as he traveled with Axel, he realized that every time he was brave enough to try a new food, 
            curious enough to ask a question, or kind enough to help a friend, he was already wearing a badge in his heart."
          </p>
          <div className="flex justify-center gap-4">
            <div className="px-6 py-3 bg-slate-50 rounded-2xl text-slate-700 font-bold text-sm">Brave</div>
            <div className="px-6 py-3 bg-slate-50 rounded-2xl text-slate-700 font-bold text-sm">Curious</div>
            <div className="px-6 py-3 bg-slate-50 rounded-2xl text-slate-700 font-bold text-sm">Kind</div>
          </div>
        </div>
      </section>
    </div>
  );
}
