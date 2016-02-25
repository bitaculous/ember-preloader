require_relative '../lib/ember/preloader/version'

module PreloaderHelper # :nodoc:
  def preloader
    Preloader
  end

  module Preloader # :nodoc:
    class << self
      def version
        Ember::Preloader::VERSION
      end
    end
  end
end