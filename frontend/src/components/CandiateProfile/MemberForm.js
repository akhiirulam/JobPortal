const MemberFormList = ({ index, member, handleInputChange, handleRemove }) => (
  <div className="flex flex-col bg-white p-4 rounded-md shadow-md mb-4">
    <div className="flex flex-col gap-4">
    
      <div className="flex flex-col gap-1">
        <label className="font-bold">Network</label>
        <input
          type="text"
          name="Network"
          value={member.name}
          onChange={(e) => handleInputChange(e, index)}
          placeholder="Network"
          className="p-2 border rounded-md"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="font-bold">Url</label>
        <input
          type="text"
          name="SocialURL"
          value={member.designation}
          onChange={(e) => handleInputChange(e, index)}
          placeholder="URL"
          className="p-2 border rounded-md"
        />
      </div>

      <button
        type="button"
        onClick={() => handleRemove(index)}
        className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md"
      >
        Remove Network
      </button>
    </div>
  </div>
);

export default MemberFormList;
