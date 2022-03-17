export interface ChatFacebookProps {}
const ChatFacebook: React.FC<ChatFacebookProps> = () => {
  return (
    <>
      <div id="fb-root"></div>
      <div id="fb-customer-chat" className="fb-customerchat"></div>
    </>
  );
};
export default ChatFacebook;
