const MemberFormList = ({ index, member, handleInputChange, handleRemove }) => (
  <div className="flex flex-col bg-white p-4 rounded-md shadow-md mb-4">
    <div className="flex flex-col gap-4">
    <h3 className="text-lg font-bold">Member {index + 1}</h3>
      <div className="flex flex-col gap-1">
        <label className="font-bold">Name</label>
        <input
          type="text"
          name="name"
          value={member.name}
          onChange={(e) => handleInputChange(e, index)}
          placeholder="Name"
          className="p-2 border rounded-md"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="font-bold">Designation</label>
        <input
          type="text"
          name="designation"
          value={member.designation}
          onChange={(e) => handleInputChange(e, index)}
          placeholder="Designation"
          className="p-2 border rounded-md"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="font-bold">Experience</label>
        <input
          type="text"
          name="experience"
          value={member.experience}
          onChange={(e) => handleInputChange(e, index)}
          placeholder="Experience"
          className="p-2 border rounded-md"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="font-bold">Profile Image</label>
        <input
          type="file"
          name={`members[${index}].profileImage`}
          onChange={(e) => handleInputChange(e, index)}
          className="p-2 border rounded-md"
        />
        {member.previewImage && (
          <img
            src={member.previewImage}
            alt="Profile Preview"
            className="mt-2 w-20 h-20 object-cover"
          />
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label className="font-bold">Facebook URL</label>
        <input
          type="text"
          name="facebookUrl"
          value={member.facebookUrl}
          onChange={(e) => handleInputChange(e, index)}
          placeholder="https://facebook.com"
          className="p-2 border rounded-md"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="font-bold">Twitter URL</label>
        <input
          type="text"
          name="twitterUrl"
          value={member.twitterUrl}
          onChange={(e) => handleInputChange(e, index)}
          placeholder="https://twitter.com"
          className="p-2 border rounded-md"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="font-bold">Google Plus URL</label>
        <input
          type="text"
          name="googlePlusUrl"
          value={member.googlePlusUrl}
          onChange={(e) => handleInputChange(e, index)}
          placeholder="https://plus.google.com"
          className="p-2 border rounded-md"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="font-bold">Linkedin URL</label>
        <input
          type="text"
          name="linkedinUrl"
          value={member.linkedinUrl}
          onChange={(e) => handleInputChange(e, index)}
          placeholder="https://linkedin.com"
          className="p-2 border rounded-md"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="font-bold">Dribbble URL</label>
        <input
          type="text"
          name="dribbbleUrl"
          value={member.dribbbleUrl}
          onChange={(e) => handleInputChange(e, index)}
          placeholder="https://dribbble.com"
          className="p-2 border rounded-md"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="font-bold">Description</label>
        <textarea
          name="description"
          value={member.description}
          onChange={(e) => handleInputChange(e, index)}
          placeholder="Description"
          className="p-2 border rounded-md"
          rows="4"
        />
      </div>
      <button
        type="button"
        onClick={() => handleRemove(index)}
        className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md"
      >
        Remove Member
      </button>
    </div>
  </div>
);

export default MemberFormList;
