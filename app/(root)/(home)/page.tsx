import Link from "next/link";
import {Button} from "@/components/ui/button";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import Filter from "@/components/shared/Filter";
import {HomePageFilters} from "@/constants/filters";
import HomeFilters from "@/components/home/HomeFilters";
import NoResult from "@/components/shared/NoResult";
import QuestionCard from "@/components/cards/QuestionCard";

const questions = [
    {
        _id: '1',
        title: 'Best practices for data fetching in a Next.js application with Server-Side Rendering (SSR)?',
        tags: [
            {_id: '1', name: 'python'}, {_id: '2', name: 'javascript'}, {_id: '3', name: 'react'}
        ],
        author: {
            _id: '123',
            name: 'John Doe',
            picture: 'url_to_john_picture.jpg'
        },
        upvotes: 10,
        views: 101231230,
        answers: [{}, {},],
        createdAt:  new Date ('2023-08-01T12:00:00.000Z')
    },
    {
        _id: '2',
        title: 'Redux Toolkit Not Updating State as Expected',
        tags: [
            {_id: '1', name: 'redux'}, {_id: '2', name: 'react'}, {_id: '3', name: 'state'}
        ],
        author: {
            _id: '123',
            name: 'Jane Smith',
            picture: 'url_to_jane_picture.jpg'
        },
        upvotes: 15,
        views: 150,
        answers: [{}, {}, ],
        createdAt: new Date ('2022-08-02T15:30:00.000Z')
    },
];

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
          <h1 className="h1-bold text-dark100_light900">All Questions</h1>
          <Link href="/ask-question" className="flex justify-end max-sm:w-full">
              <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">Ask a Question</Button>
          </Link>
      </div>
        <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
            <LocalSearchbar route="/" iconPosition="left" imgSrc="/assets/icons/search.svg" placeholder="Search for questions" otherClasses="flex-1" />
            <Filter filters={HomePageFilters} otherClasses="min-h-[56px] sm:min-w-[170px]" containerClasses="hidden max-md:flex" />
        </div>

        <HomeFilters />

        <div className="mt-10 flex w-full flex-col gap-6">
            {questions.length > 0 ?
            questions.map((question) => (
            <QuestionCard key={question._id} _id={question._id} title={question.title} tags={question.tags} author={question.author} upvotes={question.upvotes}
                views={question.views} answers={question.answers} createdAt={question.createdAt}
            />
            ))
                : <NoResult
                    title='There’s no question to show'
                    description='Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡'
                    link='/ask-question'
                    linkTitle='Ask a Question'
                />}
        </div>
    </>
  );
}
