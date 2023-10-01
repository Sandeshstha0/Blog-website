import { IArticle } from "@/types";
import React from "react";
import Link from "next/link";

interface IPropType {
  article: IArticle;
}

const Blogcard = ({ article }: IPropType) => {
  return (
    <div>
      <Link href="#">
        <h1 className="text-xl text-gray-600 font-bold hover:decoration-2 hover:underline hover:cursor-pointer hover:decoration-primary">
          {article.attributes.Title}
        </h1>
      </Link>
      <div className="flex items-center my-4">
        <div>
          <img
            src={`${process.env.API_BASE_URL}${article.attributes.author.data.attributes.avatar.data.attributes.formats.thumbnail.url}`}
          />
          height={40}
          width={40}
        </div>
        <span className="text-sm font-bold text-gray-600">
            {article.attributes.author.data.attributes.firstname}{''}
            {article.attributes.author.data.attributes.lastname} on
            <span className="=text-gray-400">
                {article.attributes.createdAt}
        </span>
        </span>
      </div>
    </div>
  );
};

export default Blogcard;
