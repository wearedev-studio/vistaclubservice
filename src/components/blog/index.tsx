import { getYoutubeVideoId } from "@/helpers/getYoutubeVideoId";
import { VideoBlog } from "@/types/videoBlog";
import { log } from "console";
import React from "react";

interface ComponentProps {
  videoBlogData: VideoBlog[];
}

const Blog: React.FC<ComponentProps> = ({ videoBlogData }) => {
  return (
    <div className="video-blog media-47 page_section_63 section section_container-width_1200">
      <div className="media-47__inner section__content">
        <div className="section__header section__header_align_center wysiwyg-string">
          <h3>
            Смотрите наш видео-блог на&nbsp;
            <a href="https://youtube.com/@vistaclubservice2972" target="_blank">
              YouTube
            </a>
          </h3>
        </div>

        <div className="flexible-list flexible-list_columns_3 flexible-list_mobile-columns_1 media-47-list media-47__list">
          {videoBlogData.map((item) => {
            return (
              <div key={item.id} className="media-47-item media-47-list__item flexible-list__item">
                <div className="media-47-item__video-container">
                  <div className="media-47-item__video" parse-video-url="https://www.youtube.com/watch?v=aEhwsZTgSAw">
                    <iframe className="video-blog__video" loading="lazy" src={`http://www.youtube.com/embed/${getYoutubeVideoId(item.videoUrl)}`} frameBorder={0} allowFullScreen></iframe>
                  </div>
                </div>
                <div className="media-47-item__text wysiwyg-content">
                  <strong>{item.title}</strong>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export { Blog };
