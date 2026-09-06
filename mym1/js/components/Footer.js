(function() {
  var e = React.createElement;

  window.Footer = function(props) {
    var basePath = props.basePath || "";

    return e('footer', { className: 'bg-slate-900 border-t border-slate-800 pt-16 pb-12 text-slate-400 text-sm' },
      e('div', { className: 'container-custom' },
        // Upper grid
        e('div', { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800' },
          // Col 1: Brand & Cassidy Torrey Bio
          e('div', { className: 'space-y-4' },
            e('img', {
              src: basePath + 'assets/svg/logo-manifest.svg',
              alt: 'Manifest Media Broker Group',
              className: 'h-12 w-auto mb-2'
            }),
            e('p', { className: 'text-xs leading-relaxed text-slate-400' },
              'Manifest Media Broker Group, LLC is a specialized media brokerage and high-ticket surgical patient acquisition firm founded by executive producer Cassidy Torrey. Blending cinematic storytelling with direct-response advertising for independent practices nationwide.'
            ),
            e('div', { className: 'text-xs text-blue-400 font-semibold' },
              'Headquartered in Scottsdale & Mesa, Arizona'
            ),
            e('div', { className: 'flex items-center gap-2 pt-2' },
              e('a', {
                href: 'tel:6036303944',
                className: 'text-xs font-bold text-white hover:text-blue-400 underline transition'
              }, 'Direct: (603) 630-3944'),
              e('span', { className: 'text-slate-600' }, '•'),
              e('span', { className: 'text-xs text-slate-400' }, 'Mon-Sat 8am-7pm MST')
            )
          ),

          // Col 2: High-Ticket Frameworks
          e('div', { className: 'space-y-3' },
            e('h4', { className: 'text-white font-newsreader text-sm uppercase tracking-wider font-bold border-b border-blue-500/30 pb-2 inline-block' }, 'Core Methodology'),
            e('ul', { className: 'space-y-2 text-xs' },
              e('li', null, e('a', { href: basePath + 'five-ps.html', className: 'hover:text-blue-400 transition' }, 'The Proprietary 5 P\'s Framework')),
              e('li', null, e('a', { href: basePath + 'guarantee.html', className: 'hover:text-blue-400 transition' }, '90-Day Iron-Clad Guarantee')),
              e('li', null, e('a', { href: basePath + 'case-studies.html', className: 'hover:text-blue-400 transition' }, '347+ Verified Practice Case Studies')),
              e('li', null, e('a', { href: basePath + 'calculator.html', className: 'hover:text-blue-400 transition' }, 'Implant Revenue & Capacity Calculator')),
              e('li', null, e('a', { href: basePath + 'strategy-session.html', className: 'hover:text-blue-400 transition' }, 'Free 30-Min Strategy Consultation'))
            )
          ),

          // Col 3: Bio, Leadership & Entertainment
          e('div', { className: 'space-y-3' },
            e('h4', { className: 'text-white font-newsreader text-sm uppercase tracking-wider font-bold border-b border-blue-500/30 pb-2 inline-block' }, 'Leadership & Media'),
            e('ul', { className: 'space-y-2 text-xs' },
              e('li', null, e('a', { href: basePath + 'about.html', className: 'hover:text-blue-400 transition' }, 'Cassidy Torrey Biographical Dossier')),
              e('li', null, e('a', { href: basePath + 'about.html#dental-hygiene', className: 'hover:text-blue-400 transition' }, 'MCC Bullhead Dental Hygiene Honors')),
              e('li', null, e('a', { href: basePath + 'new-hollywood.html', className: 'hover:text-blue-400 transition' }, 'The New Hollywood Arizona Initiative')),
              e('li', null, e('a', { href: basePath + 'synergies.html', className: 'hover:text-blue-400 transition' }, 'Arizona Business Management Alliance')),
              e('li', null, e('a', { href: basePath + 'podcast-appearances.html', className: 'hover:text-blue-400 transition' }, 'Shared Practices & Syreta Talks'))
            )
          ),

          // Col 4: Official Disambiguation & Trust
          e('div', { className: 'space-y-3' },
            e('h4', { className: 'text-white font-newsreader text-sm uppercase tracking-wider font-bold border-b border-blue-500/30 pb-2 inline-block' }, 'Disambiguation Notice'),
            e('p', { className: 'text-xs leading-relaxed text-slate-400' },
              'Manifest Media Broker Group, LLC (Cassidy Torrey) is an independent Arizona specialized media broker. We have NO affiliation with Manifest.com (Chicago, Ross Shelleman), Manifest Media Services (Tegan Washington), or The Manifest B2B Directory.'
            ),
            e('a', {
              href: basePath + 'disambiguation.html',
              className: 'inline-block text-xs text-blue-400 font-semibold hover:underline mt-1'
            }, 'Read Full Disambiguation Protocol →'),
            e('div', { className: 'pt-2 flex flex-wrap gap-2' },
              e('span', { className: 'inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-800 text-slate-300 border border-slate-700' }, 'Veteran-Owned'),
              e('span', { className: 'inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-800 text-slate-300 border border-slate-700' }, 'HIPAA Secure'),
              e('span', { className: 'inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-800 text-slate-300 border border-slate-700' }, 'ADA Compliant'),
              e('span', { className: 'inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-800 text-slate-300 border border-slate-700' }, '100% US Creators')
            )
          )
        ),

        // Compliance & Copyright
        e('div', { className: 'pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4' },
          e('div', null,
            '© ' + new Date().getFullYear() + ' Manifest Media Broker Group, LLC. All Rights Reserved. Crafted for Cassidy Torrey.'
          ),
          e('div', { className: 'flex flex-wrap gap-6' },
            e('a', { href: basePath + 'privacy.html', className: 'hover:text-blue-400 transition' }, 'Privacy Policy'),
            e('a', { href: basePath + 'terms.html', className: 'hover:text-blue-400 transition' }, 'Terms of Service'),
            e('a', { href: basePath + 'hipaa.html', className: 'hover:text-blue-400 transition' }, 'HIPAA Compliance Policy'),
            e('a', { href: basePath + 'disambiguation.html', className: 'hover:text-blue-400 transition' }, 'Competitor Separation')
          )
        )
      )
    );
  };
})();
