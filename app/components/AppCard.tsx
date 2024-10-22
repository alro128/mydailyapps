import Link from "next/link";
import React from "react";

type AppCardProps = {
  id: number;
  name: string;
  description: string;
  topic: string;
  path: string;
  thumbnail: string;
  viewType: string;
};

const AppCard: React.FC<AppCardProps> = ({
  name,
  description,
  topic,
  path,
  thumbnail,
  viewType,
}) => {
  return (
    <div className="card glass w-120 shadow-xl">
      <figure>
        <Link href={path}>
          <img src={thumbnail} alt={name} />
        </Link>
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <Link href={path}>{name}</Link>
        </h2>
        <p className="text-justify">{description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-ghost">{topic}</div>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
