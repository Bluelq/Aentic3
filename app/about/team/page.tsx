export const metadata = {
  title: "Our Team | Aentic AI",
  description: "The human insight and AI power behind Aentic AI.",
}

export default function TeamPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">
                Our Team & Technology
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                The Human Insight and AI Power Behind Aentic.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">The Founder</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Aentic AI is driven by a single founder whose unique expertise forms the core of our approach. With a
                foundation in psychology and enriched by decades of experience across diverse business fields, our
                founder brings a distinct perspective to AI implementation. This blend ensures that solutions are not
                only technically sound but also deeply aligned with human behavior and practical business needs.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Operating with the agility of a dedicated expert, Aentic leverages a curated suite of advanced AI tools
                to translate complex challenges into effective, intuitive applications. The focus remains steadfastly on
                human-centered design, transparency, and delivering tangible value through intelligent technology.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">Our AI Toolkit</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I leverage a wide array of cutting-edge AI models, platforms, and tools to deliver the best solutions.
                While the specific tools vary by project, our core capabilities are built upon technologies including:
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  "V0",
                  "Manus",
                  "GPT-4",
                  "Claude 3",
                  "Gemini",
                  "Llama 3",
                  "Mistral Large",
                  "DALL-E 3",
                  "Midjourney",
                  "Stable Diffusion",
                  "TensorFlow",
                  "PyTorch",
                  "Scikit-learn",
                  "Keras",
                  "Hugging Face Transformers",
                  "LangChain",
                  "OpenCV",
                  "NLTK",
                  "spaCy",
                  "Pandas",
                  "NumPy",
                  "Jupyter Notebooks",
                  "Google Colab",
                  "AWS SageMaker",
                  "Azure Machine Learning",
                  "Google AI Platform",
                  "Databricks",
                  "Snowflake",
                  "Tableau",
                  "Power BI",
                  "Dialogflow",
                  "Rasa",
                  "BERT",
                  "Word2Vec",
                  "FastText",
                  "YOLO (You Only Look Once)",
                  "ResNet",
                  "VGGNet",
                  "AutoML",
                  "XGBoost",
                  "LightGBM",
                  "CatBoost",
                  "Ray",
                  "MLflow",
                  "Kubeflow",
                  "Weights & Biases",
                  "GitHub Copilot",
                  "Tabnine",
                  "RunwayML",
                  "Synthesia",
                  "Descript",
                  "Murf.ai",
                  "ElevenLabs",
                  "NVIDIA CUDA",
                  "Apache Spark MLlib",
                ].map((tool, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md text-center text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
