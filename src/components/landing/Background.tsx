const Background = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-deep-black">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-electric-blue/20 blur-[100px]"></div>
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-neon-purple/20 blur-[100px]"></div>
    </div>
  );
};
export default Background;