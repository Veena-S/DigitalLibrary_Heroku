// This will act as the dashboard where the modal is displayed

import React, { useState } from 'react';

export default function BookModal({ modalId, modalTitleId }) {
  // State variable that decides whether the modal is to be displayed or hidden
  const [showModal, setShowModal] = useState(false);

  const displayModal = () => { setShowModal(true); };
  const hideModal = () => { setShowModal(false); };

  return (
    <div>
      <button className="btn-sm btn-secondary mt-2" type="button" data-toggle="modal" data-target={`#${modalId}`}>Read</button>

      <div className="modal fade" id={modalId} tabIndex="-1" role="dialog" aria-labelledby={modalTitleId} aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id={modalTitleId}>Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>
                uytiueytsbadfhsdajkuiqwyersnbdj
                ajdfjkhdsfjkashgdfiuweryruitnmxcbvnbvkjas
                sdjgfsdjafhjkyrtiuqyeomnxcbvxc
                asfgasdayiureythns,bfnkajsdf

              </p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
