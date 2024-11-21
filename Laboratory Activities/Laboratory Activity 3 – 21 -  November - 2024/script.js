document.addEventListener("DOMContentLoaded", () => {
  const textInput = document.getElementById("textInput");
  const wordCount = document.getElementById("wordCount");
  const sentenceCount = document.getElementById("sentenceCount");

  textInput.addEventListener("input", () => {
    const text = textInput.value.trim();

    // Calculate word count
    const words = text.split(/\s+/).filter((word) => word.length > 0);
    wordCount.textContent = `Words: ${words.length}`;

    // Calculate sentence count
    const sentences = text
      .split(/[.!?]\s*/)
      .filter((sentence) => sentence.length > 0);
    sentenceCount.textContent = `Sentences: ${sentences.length}`;
  });
});
