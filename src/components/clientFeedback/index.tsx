import { FeedbackClient } from "@/types/feedbackClient";
import React from "react";
import imagePlaceholder from "../../../public/images/placeholder.png";
import { getYoutubeVideoId } from "@/helpers/getYoutubeVideoId";

interface ComponentProps {
  feedbackClients: FeedbackClient[];
}

const ClientFeedback: React.FC<ComponentProps> = ({ feedbackClients }) => {
  return (
    <div id="reviews" className="page-section">
      <div className="feedback-clients media-47 page_section_57 section section_container-width_1200">
        <div className="media-47__inner section__content">
          <div className="section__header section__header_align_center wysiwyg-string">
            <h3>Отзывы наших клиентов</h3>
          </div>
          <div className="flexible-list flexible-list_columns_3 flexible-list_mobile-columns_1 media-47-list media-47__list">
            {feedbackClients.map(({ id, carName, city, userName, image, videoUrl }) => {
              let media = videoUrl ? videoUrl : image ? image.url : imagePlaceholder.src;
              return (
                <div key={id} className="media-47-item media-47-list__item flexible-list__item">
                  <div className="feedback-clients__media-wrapper media-47-item__video">
                    {videoUrl ? (
                      <iframe className="feedback-clients__media-video" loading="lazy" src={`https://www.youtube.com/embed/${getYoutubeVideoId(media)}`} frameBorder={0} allowFullScreen></iframe>
                    ) : (
                      <img className="feedback-clients__media-img" src={media} />
                    )}
                  </div>
                  <div className="media-47-item__text wysiwyg-content">
                    <strong>{carName}</strong>
                    <br />
                    {userName} <br />
                    {city}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export { ClientFeedback };
