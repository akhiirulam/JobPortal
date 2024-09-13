import React from 'react';

const SocialMediaFormList = ({
  index,
  socialMediaEntry = { platform: "", url: "" },
  handleSocialMediaChange,
  handleRemoveSocialMedia,
}) => (
  <div className="flex flex-col bg-white p-4 rounded-md shadow-md mb-4">
    <div className="flex gap-4 items-center">
      <div className="flex-1">
        <label className="font-bold">Social Media Platform</label>
        <select
          name="platform"
          value={socialMediaEntry.platform || ""}
          onChange={(e) => handleSocialMediaChange(e, index)}
          className="p-2 border rounded-md w-full"
        >
          <option value="" disabled>Select Platform</option>
          <option value="Facebook">Facebook</option>
          <option value="Twitter">Twitter</option>
          <option value="Instagram">Instagram</option>
          <option value="LinkedIn">LinkedIn</option>
          <option value="Dribbble">Dribbble</option>
        </select>
      </div>

      <div className="flex-1">
        <label className="font-bold">URL</label>
        <input
          type="text"
          name="url"
          value={socialMediaEntry.url || ""}
          onChange={(e) => handleSocialMediaChange(e, index)}
          placeholder="https://example.com"
          className="p-2 border rounded-md w-full"
        />
      </div>

      <button
        type="button"
        onClick={() => handleRemoveSocialMedia(index)}
        className="ml-4 px-4 py-2 bg-red-500 text-white rounded-md"
      >
        Remove
      </button>
    </div>
  </div>
);

export default SocialMediaFormList;
