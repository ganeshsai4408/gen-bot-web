import React, { useState } from 'react';
import { Bot, MessageSquare, Shield, Zap } from 'lucide-react';

export default function GenBotWebsite() {
  const [isHovered, setIsHovered] = useState(false);

  const handleInviteClick = () => {
    window.open('https://discord.com/oauth2/authorize?client_id=1391771249952428052&permissions=8&integration_type=0&scope=bot', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-6">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-2xl shadow-2xl">
              <Bot size={48} className="text-white" />
            </div>
          </div>
          
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Gen
          </h1>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-6">
            A powerful Discord bot that responds to your commands. Simply mention <span className="bg-gray-700 px-2 py-1 rounded text-blue-400 font-mono">@gen</span> followed by your message to get started.
          </p>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-400 leading-relaxed mb-4">
              Gen is designed to be your intelligent Discord companion, ready to assist with various tasks and conversations. Whether you need help with information, want to have a chat, or need assistance with server management, Gen is here to help make your Discord experience more engaging and productive.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-gray-800/30 rounded-xl p-4 border border-gray-700/30">
                <div className="text-2xl mb-2">🤖</div>
                <h3 className="font-semibold text-blue-400 mb-2">AI-Powered</h3>
                <p className="text-sm text-gray-400">Advanced AI capabilities for natural conversations</p>
              </div>
              
              <div className="bg-gray-800/30 rounded-xl p-4 border border-gray-700/30">
                <div className="text-2xl mb-2">⚡</div>
                <h3 className="font-semibold text-purple-400 mb-2">Fast Response</h3>
                <p className="text-sm text-gray-400">Quick replies to keep conversations flowing</p>
              </div>
              
              <div className="bg-gray-800/30 rounded-xl p-4 border border-gray-700/30">
                <div className="text-2xl mb-2">🛡️</div>
                <h3 className="font-semibold text-green-400 mb-2">Secure</h3>
                <p className="text-sm text-gray-400">Safe and reliable for all server sizes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main CTA Button */}
        <div className="text-center mb-16">
          <button
            onClick={handleInviteClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Shield className="mr-3 relative z-10" size={24} />
            <span className="relative z-10">Add Gen to Discord</span>
            <div className={`ml-3 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`}>
              →
            </div>
          </button>
        </div>

        {/* How to Use Section */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 mb-16 border border-gray-700/50">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            How to Get Started
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-2xl p-6 mb-4 group-hover:from-blue-500/30 group-hover:to-purple-600/30 transition-all duration-300">
                <div className="text-3xl mb-4">🔗</div>
                <h3 className="text-xl font-semibold mb-2">1. Click Invite</h3>
                <p className="text-gray-400">Click the button above to open the Discord authorization page</p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-2xl p-6 mb-4 group-hover:from-blue-500/30 group-hover:to-purple-600/30 transition-all duration-300">
                <div className="text-3xl mb-4">🏠</div>
                <h3 className="text-xl font-semibold mb-2">2. Select Server</h3>
                <p className="text-gray-400">Choose a server where you have manage permissions</p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-2xl p-6 mb-4 group-hover:from-blue-500/30 group-hover:to-purple-600/30 transition-all duration-300">
                <div className="text-3xl mb-4">✅</div>
                <h3 className="text-xl font-semibold mb-2">3. Authorize</h3>
                <p className="text-gray-400">Click "Authorize" to add Gen to your server</p>
              </div>
            </div>
          </div>
        </div>

        {/* Usage Instructions */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 mb-16 border border-gray-700/50">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Usage Instructions
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
                <MessageSquare size={20} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Command Format</h3>
                <p className="text-gray-300 mb-2">
                  The bot listens to commands that start with <span className="bg-gray-700 px-2 py-1 rounded text-blue-400 font-mono">@gen</span>
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
                <Zap size={20} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Command Examples</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <div className="bg-gray-700/50 p-3 rounded-lg font-mono text-blue-400 mb-2">
                      @gen hello
                    </div>
                    <p className="text-sm text-gray-400">Greet the bot and start a conversation</p>
                  </div>
                  <div>
                    <div className="bg-gray-700/50 p-3 rounded-lg font-mono text-blue-400 mb-2">
                      @gen help
                    </div>
                    <p className="text-sm text-gray-400">Get a list of available commands</p>
                  </div>
                  <div>
                    <div className="bg-gray-700/50 p-3 rounded-lg font-mono text-blue-400 mb-2">
                      @gen tell me a joke
                    </div>
                    <p className="text-sm text-gray-400">Request entertainment content</p>
                  </div>
                 
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 p-6 rounded-2xl border border-blue-500/20">
              <h4 className="text-lg font-semibold mb-3 text-blue-400">📋 Features & Capabilities</h4>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm text-gray-300">Natural language processing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm text-gray-300">Multi-channel support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm text-gray-300">Custom responses</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm text-gray-300">24/7 availability</span>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                💡 <strong>Tip:</strong> Gen will reply in any text channel it has access to. Make sure the bot has the necessary permissions to read and send messages in your channels. For best results, give Gen administrator permissions or at least "Send Messages", "Read Message History", and "Use Slash Commands" permissions.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center pt-8 border-t border-gray-700/50">
          <p className="text-gray-400 text-sm">
            made by <span className="text-blue-400 font-semibold">ganesh sai</span>
          </p>
        </footer>
      </div>
    </div>
  );
}