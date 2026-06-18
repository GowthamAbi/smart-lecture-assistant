function TypingIndicator() {

  return (

    <div className="flex items-center gap-2">

      <div className="w-3 h-3 bg-gray-500 rounded-full animate-bounce"></div>

      <div className="w-3 h-3 bg-gray-500 rounded-full animate-bounce delay-100"></div>

      <div className="w-3 h-3 bg-gray-500 rounded-full animate-bounce delay-200"></div>

    </div>

  );

}

export default TypingIndicator;