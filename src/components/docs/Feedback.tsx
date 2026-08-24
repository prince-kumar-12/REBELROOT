"use client";

import { useEffect, useState } from "react";
import { ThumbsUp, ThumbsDown, Check, Pencil } from "lucide-react";

const EDIT_REPO = "https://github.com/ParasxAgarwal/rebelroot/edit/main/public/docs/";

export function Feedback({ path }: { path: string }) {
  const key = `omni-fb-${path}`;
  const [answered, setAnswered] = useState(false);

  useEffect(() => {
    try {
      // Reads localStorage; must run post-mount to stay SSR-safe.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setAnswered(Boolean(localStorage.getItem(key)));
    } catch {
      /* ignore */
    }
  }, [key]);

  function vote(value: "yes" | "no") {
    try {
      localStorage.setItem(key, value);
    } catch {
      /* ignore */
    }
    setAnswered(true);
  }

  return (
    <div className="feedback">
      <span className="feedback__text">Was this page helpful?</span>
      {answered ? (
        <span className="feedback__thanks">
          <Check />
          Thanks for the feedback!
        </span>
      ) : (
        <span className="feedback__btns">
          <button type="button" className="feedback__btn" onClick={() => vote("yes")}>
            <ThumbsUp />
            Yes
          </button>
          <button type="button" className="feedback__btn" onClick={() => vote("no")}>
            <ThumbsDown />
            No
          </button>
        </span>
      )}
      <a className="feedback__edit" href={`${EDIT_REPO}${path}.html`} target="_blank" rel="noopener noreferrer">
        <Pencil />
        Edit this page
      </a>
    </div>
  );
}
